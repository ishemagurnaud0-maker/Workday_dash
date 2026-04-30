import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class DepartmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    createDepartment(companyId: string, dto: CreateDepartmentDto): Promise<{
        message: string;
        department: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    getAllDepartments(companyId: string): Promise<{
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
    getDepartment(companyId: string, departmentId: string): Promise<{
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
    updateDepartment(companyId: string, departmentId: string, dto: UpdateDepartmentDto): Promise<{
        message: string;
        department: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    deleteDepartment(companyId: string, departmentId: string): Promise<{
        message: string;
    }>;
}
