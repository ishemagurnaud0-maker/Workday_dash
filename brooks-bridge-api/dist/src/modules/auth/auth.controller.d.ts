import { AuthService } from './auth.service';
import { RegisterCompanyDto, RegisterOwnerDto, LoginDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerOwner(user: RegisterOwnerDto): Promise<{
        message: string;
        email: string;
    }>;
    registerCompany(user: any, company: RegisterCompanyDto): Promise<{
        message: string;
        token: string;
        companyId: string;
        companyName: string;
        companyEmail: string;
        companyPhone: string;
    }>;
    login(loginCreds: LoginDto): Promise<{
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
