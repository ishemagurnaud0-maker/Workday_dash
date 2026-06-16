import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: any, dto: CreateUserDto): Promise<{
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
    getAll(user: any): Promise<{
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
    get(user: any, id: string): Promise<{
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
    update(user: any, id: string, dto: UpdateUserDto): Promise<{
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
    delete(user: any, id: string): Promise<{
        message: string;
    }>;
    requestEmailUpdate(user: any, id: string, dto: UpdateEmailDto): Promise<{
        message: string;
    }>;
    verifyEmailUpdate(user: any, id: string, dto: VerifyEmailDto): Promise<{
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
}
