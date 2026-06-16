export declare class EmployeeResponseDto {
    id: string;
    name: string;
    email: string;
    role: string;
    departmentId?: string;
    phone?: string;
    address?: string;
    hireDate: string;
    salary?: number;
    companyId: string;
    createdAt: string;
    updatedAt: string;
}
export declare class EmployeesListResponseDto {
    employees: EmployeeResponseDto[];
    total: number;
}
