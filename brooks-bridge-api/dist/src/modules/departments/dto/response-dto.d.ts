export declare class DepartmentResponseDto {
    id: string;
    name: string;
    description?: string;
    companyId: string;
    employeeCount?: number;
    createdAt: string;
    updatedAt: string;
}
export declare class DepartmentsListResponseDto {
    departments: DepartmentResponseDto[];
    total: number;
}
