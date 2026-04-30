import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { EmailOtpService } from '../auth/email-otp.service';
import { Cache } from 'cache-manager';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { NotificationsService } from '../notifications/notifications.service';
export declare class UsersService {
    private prisma;
    private emailOtpService;
    private cacheManager;
    private notificationsService;
    constructor(prisma: PrismaService, emailOtpService: EmailOtpService, cacheManager: Cache, notificationsService: NotificationsService);
    createEmployee(companyId: string, dto: CreateUserDto): Promise<{
        message: string;
        employee: {
            department: {
                name: string;
                id: string;
                companyId: string;
                createdAt: Date;
            } | null;
            name: string;
            email: string;
            phoneNumber: string;
            id: string;
            companyId: string;
            createdAt: Date;
            salary: number | null;
            pendingEmail: string | null;
            departmentId: string | null;
        };
    }>;
    getAllEmployees(companyId: string): Promise<{
        name: string;
        email: string;
        phoneNumber: string;
        password: string;
        id: string;
        companyId: string;
        createdAt: Date;
        salary: number | null;
        pendingEmail: string | null;
        departmentId: string | null;
    }[]>;
    getOneEmployee(companyId: string, employeeId: string): Promise<{
        payroll: {
            id: string;
            amount: number;
            currency: string | null;
            paymentDate: Date;
        }[];
        department: {
            name: string;
            id: string;
        } | null;
        name: string;
        email: string;
        phoneNumber: string;
        id: string;
        createdAt: Date;
        salary: number | null;
    }>;
    updateEmployee(employeeId: string, dto: UpdateUserDto, companyId: string): Promise<{
        message: string;
        employee: {
            department: {
                name: string;
                id: string;
                companyId: string;
                createdAt: Date;
            } | null;
            name: string;
            email: string;
            phoneNumber: string;
            id: string;
            createdAt: Date;
            salary: number | null;
        };
    }>;
    requestEmailChange(employeeId: string, companyId: string, dto: UpdateEmailDto): Promise<{
        message: string;
    }>;
    verifyEmailUpdate(companyId: string, employeeId: string, dto: VerifyEmailDto): Promise<{
        message: string;
        employee: {
            department: {
                name: string;
                id: string;
                companyId: string;
                createdAt: Date;
            } | null;
            name: string;
            email: string;
            phoneNumber: string;
            id: string;
            createdAt: Date;
            salary: number | null;
        };
    }>;
    deleteEmployee(companyId: string, employeeId: string): Promise<{
        message: string;
    }>;
}
