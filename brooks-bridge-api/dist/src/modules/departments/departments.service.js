"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DepartmentsService = class DepartmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createDepartment(companyId, dto) {
        const department = await this.prisma.department.create({
            data: {
                name: dto.name,
                companyId
            }
        });
        return {
            message: 'Department created successfully.',
            department,
        };
    }
    async getAllDepartments(companyId) {
        const departments = await this.prisma.department.findMany({
            where: { companyId },
            include: {
                _count: {
                    select: {
                        employees: true
                    }
                }
            }
        });
        if (!departments)
            throw new common_1.NotFoundException("You have not created any departments.");
        return {
            message: 'Your departments',
            departments,
        };
    }
    async getDepartment(companyId, departmentId) {
        const department = await this.prisma.department.findUnique({
            where: { id: departmentId },
            include: {
                employees: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phoneNumber: true,
                        salary: true
                    }
                }
            }
        });
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        if (department.companyId !== companyId) {
            throw new common_1.ForbiddenException('Access Denied.');
        }
        return department;
    }
    async updateDepartment(companyId, departmentId, dto) {
        const department = await this.prisma.department.findUnique({
            where: { id: departmentId }
        });
        if (!department)
            throw new common_1.NotFoundException('Department not found.');
        if (department.companyId !== companyId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        const updatedDepartment = await this.prisma.department.update({
            where: { id: departmentId },
            data: { ...dto }
        });
        return {
            message: 'Department has been updated',
            department: updatedDepartment
        };
    }
    async deleteDepartment(companyId, departmentId) {
        const department = await this.prisma.department.findUnique({
            where: { id: departmentId }
        });
        if (!department)
            throw new common_1.NotFoundException('Department not found.');
        if (department.companyId !== companyId) {
            throw new common_1.ForbiddenException("Access Denied.");
        }
        await this.prisma.department.delete({
            where: { id: departmentId }
        });
        return { message: "Department has been deleted successfully." };
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map