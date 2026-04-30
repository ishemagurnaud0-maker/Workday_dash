import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    createDepartment(user: any, dto: CreateDepartmentDto): Promise<{
        message: string;
        department: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    getAllDepartments(user: any): Promise<{
        message: string;
        departments: ({
            _count: {
                employees: number;
            };
        } & {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        })[];
    }>;
    getDepartment(userInfo: any, id: string): Promise<{
        employees: {
            name: string;
            email: string;
            phoneNumber: string;
            id: string;
            salary: number | null;
        }[];
    } & {
        name: string;
        id: string;
        companyId: string;
        createdAt: Date;
    }>;
    updateDepartment(userInfo: any, id: string, dto: UpdateDepartmentDto): Promise<{
        message: string;
        department: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    deleteDepartment(userInfo: any, id: string): Promise<{
        message: string;
    }>;
}
