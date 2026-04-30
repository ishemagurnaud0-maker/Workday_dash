export declare class LoginResponseDto {
    accessToken: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        companyId?: string;
    };
}
export declare class RegisterResponseDto {
    message: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        companyId?: string;
    };
    accessToken: string;
}
