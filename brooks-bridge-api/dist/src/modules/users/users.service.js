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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../prisma/prisma.service");
const email_otp_service_1 = require("../auth/email-otp.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_2 = require("@nestjs/common");
const notifications_service_1 = require("../notifications/notifications.service");
let UsersService = class UsersService {
    prisma;
    emailOtpService;
    cacheManager;
    notificationsService;
    constructor(prisma, emailOtpService, cacheManager, notificationsService) {
        this.prisma = prisma;
        this.emailOtpService = emailOtpService;
        this.cacheManager = cacheManager;
        this.notificationsService = notificationsService;
    }
    async createEmployee(companyId, dto) {
        const existingEmployee = await this.prisma.employee.findUnique({
            where: { email: dto.email }
        });
        if (existingEmployee) {
            throw new common_1.ConflictException('Employee already exists.');
        }
        const hashedPassword = await bcrypt.hashPassword(dto.password, 10);
        const newEmployee = await this.prisma.employee.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: hashedPassword,
                phoneNumber: dto.phoneNumber,
                salary: dto.salary,
                companyId,
                departmentId: dto.departmentId,
            },
            include: {
                department: true
            }
        });
        await this.notificationsService.notifyCompany(companyId, `New employee added : ${dto.name}`, 'EMPLOYEE');
        const { password, ...employeeWithoutPassWord } = newEmployee;
        return {
            message: 'Employee created successfully',
            employee: employeeWithoutPassWord
        };
    }
    async getAllEmployees(companyId) {
        const employees = await this.prisma.employee.findMany({
            where: { companyId }
        });
        if (!employees)
            throw new common_1.NotFoundException('No employees were found.');
        return employees;
    }
    async getOneEmployee(companyId, employeeId) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                salary: true,
                createdAt: true,
                department: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                payroll: {
                    select: {
                        id: true,
                        amount: true,
                        currency: true,
                        paymentDate: true,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 3,
                }
            }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not Found.');
        if (employee.department) {
            const employeeRecord = await this.prisma.employee.findUnique({
                where: { id: employeeId },
            });
            if (!employeeRecord || employeeRecord.companyId !== companyId) {
                throw new common_1.ForbiddenException('Access denied');
            }
        }
        return employee;
    }
    async updateEmployee(employeeId, dto, companyId) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not Found.');
        if (employee.companyId !== companyId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        const { email, ...safeDto } = dto;
        const updatedEmployee = await this.prisma.employee.update({
            where: { id: employeeId },
            data: { ...safeDto },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                salary: true,
                department: true,
                createdAt: true,
            }
        });
        return {
            message: 'Failed to update user',
            employee: updatedEmployee
        };
    }
    async requestEmailChange(employeeId, companyId, dto) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not found');
        if (employee.companyId !== companyId)
            throw new common_1.ForbiddenException('Access denied');
        const exisitingEmail = await this.prisma.employee.findUnique({
            where: { email: dto.newEmail }
        });
        if (exisitingEmail)
            throw new common_1.ConflictException('Email already exists');
        await this.prisma.employee.update({
            where: { id: employeeId },
            data: { pendingEmail: dto.newEmail }
        });
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        await this.cacheManager.set(`email-changer:${employeeId}`, otp, 60000);
        await this.emailOtpService.sendOtp(dto.newEmail, otp, employee.name);
        return {
            message: 'OTP sent to new email. Please verify to complete update.',
        };
    }
    async verifyEmailUpdate(companyId, employeeId, dto) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not found');
        if (employee.companyId !== companyId)
            throw new common_1.ForbiddenException('Access denied');
        if (!employee.pendingEmail)
            throw new common_1.BadRequestException('No pending email update found');
        const cachedOtp = await this.cacheManager.get(`email-update:${employeeId}`);
        if (!cachedOtp) {
            throw new common_1.BadRequestException('OTP has expired. Please request a new one');
        }
        if (cachedOtp !== dto.otp) {
            throw new common_1.ConflictException('Invalid OTP');
        }
        await this.cacheManager.del(`email-update:${employeeId}`);
        const updated = await this.prisma.employee.update({
            where: { id: employeeId },
            data: {
                email: employee.pendingEmail,
                pendingEmail: null,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                salary: true,
                department: true,
                createdAt: true,
            },
        });
        return {
            message: 'Email updated successfully',
            employee: updated,
        };
    }
    async deleteEmployee(companyId, employeeId) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not found');
        if (employee.companyId !== companyId)
            throw new common_1.ForbiddenException('Access Denied');
        const deletedEmployee = await this.prisma.employee.delete({
            where: { id: employeeId }
        });
        return {
            message: 'Employee deleted successfully.'
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_2.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, email_otp_service_1.EmailOtpService, Object, notifications_service_1.NotificationsService])
], UsersService);
//# sourceMappingURL=users.service.js.map