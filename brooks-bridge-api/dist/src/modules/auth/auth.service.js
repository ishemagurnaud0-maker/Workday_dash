"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const email_otp_service_1 = require("./email-otp.service");
const cache_manager_1 = require("@nestjs/cache-manager");
let AuthService = class AuthService {
    prisma;
    jwt;
    emailOtpService;
    cacheManager;
    constructor(prisma, jwt, emailOtpService, cacheManager) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.emailOtpService = emailOtpService;
        this.cacheManager = cacheManager;
    }
    async registerOwner(user) {
        const exsitingUser = await this.prisma.user.findUnique({
            where: {
                email: user.email
            }
        });
        if (exsitingUser) {
            throw new common_1.ConflictException('Email is already in use.');
        }
        const hashedPassword = await bcrypt.hashPassword(user.password, 10);
        const owner = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashedPassword,
                phoneNumber: user.phoneNumber,
            }
        });
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        await this.cacheManager.set(`otp:${owner.email}`, otp, 60000);
        await this.emailOtpService.sendOtp(owner.email, otp, owner.name);
        return {
            message: "OTP sent successfully",
            email: owner.email,
        };
    }
    async verifyOtp(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (user.isVerified) {
            throw new common_1.BadRequestException('User already verified');
        }
        const cachedOtp = await this.cacheManager.get(`otp:${dto.email}`);
        if (!cachedOtp) {
            throw new common_1.BadRequestException('OTP has expired. Please request a new one');
        }
        if (cachedOtp !== dto.otp) {
            throw new common_1.BadRequestException('Invalid OTP');
        }
        await this.cacheManager.del(`otp:${dto.email}`);
        await this.prisma.user.update({
            where: { email: dto.email },
            data: { isVerified: true }
        });
        const tempToken = await this.signToken(user.id, user.email, true);
        return {
            message: 'Email verified. Continue Company setup.',
            tempToken
        };
    }
    async resendOtp(email) {
        const user = await this.prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (user.isVerified)
            throw new common_1.BadRequestException('Email already verified');
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        await this.cacheManager.set(`otp:${email}`, newOtp, 600000);
        await this.emailOtpService.sendOtp(email, newOtp, user.name);
        return { message: 'New OTP sent to your email' };
    }
    async signToken(userId, email, isOnboarding) {
        const payload = {
            sub: userId,
            email: email,
            isOnboarding: isOnboarding
        };
        const options = {
            expiresIn: isOnboarding ? 3600 : 86400,
        };
        return this.jwt.signAsync(payload, options);
    }
    async RegisterCompany(userId, companyDto) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            throw new common_1.NotFoundException("User not found.");
        }
        if (user?.companyId) {
            throw new common_1.ConflictException("User already has a company.");
        }
        const existingCompany = await this.prisma.company.findUnique({
            where: { companyEmail: companyDto.companyEmail }
        });
        if (existingCompany) {
            throw new common_1.ConflictException('Company already exists, Company Email is already in use.');
        }
        const companyCreds = await this.prisma.company.create({
            data: {
                companyName: companyDto.companyName,
                companyEmail: companyDto.companyEmail,
                companyPhone: companyDto.companyPhone,
                user: {
                    connect: { id: userId }
                }
            }
        });
        const legitToken = await this.signToken(userId, user.email, false);
        return {
            message: "Company registered successfully,Onboarding complete.",
            token: legitToken,
            companyId: companyCreds.id,
            companyName: companyCreds.companyName,
            companyEmail: companyCreds.companyEmail,
            companyPhone: companyCreds.companyPhone
        };
    }
    async login(loginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: loginDto.email },
            include: { company: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const checkPassword = await bcrypt.compare(loginDto.password, user.password);
        if (!checkPassword) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const token = await this.signToken(user.id, user.email, false);
        const { password, ...userWithOutPassword } = user;
        return {
            message: 'Login Successful',
            token,
            user: userWithOutPassword,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService, email_otp_service_1.EmailOtpService, Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map