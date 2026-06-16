import { JwtService } from '@nestjs/jwt';
import { RegisterCompanyDto, RegisterOwnerDto, LoginDto } from './dto';
import { PrismaService } from '../../prisma/prisma.service';
import { EmailOtpService } from './email-otp.service';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { Cache } from 'cache-manager';
export declare class AuthService {
    private readonly prisma;
    private jwt;
    private emailOtpService;
    private cacheManager;
    constructor(prisma: PrismaService, jwt: JwtService, emailOtpService: EmailOtpService, cacheManager: Cache);
    registerOwner(user: RegisterOwnerDto): Promise<{
        message: string;
        email: string;
    }>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        message: string;
        tempToken: string;
    }>;
    resendOtp(email: string): Promise<{
        message: string;
    }>;
    private signToken;
    RegisterCompany(userId: string, companyDto: RegisterCompanyDto): Promise<{
        message: string;
        token: string;
        companyId: string;
        companyName: string;
        companyEmail: string;
        companyPhone: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        token: string;
        user: {
            company: {
                companyName: string;
                companyEmail: string;
                companyPhone: string;
                id: string;
                createdAt: Date;
            } | null;
            name: string;
            email: string;
            phoneNumber: string;
            id: string;
            imgUrl: string | null;
            companyId: string | null;
            isVerified: boolean;
            createdAt: Date;
        };
    }>;
}
