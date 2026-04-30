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
exports.EmployeesListResponseDto = exports.EmployeeResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EmployeeResponseDto {
    id;
    name;
    email;
    role;
    departmentId;
    phone;
    address;
    hireDate;
    salary;
    companyId;
    createdAt;
    updatedAt;
}
exports.EmployeeResponseDto = EmployeeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee ID' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee name' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee email' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee role' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee department ID', required: false }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "departmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee phone number', required: false }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee address', required: false }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee hire date' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "hireDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee salary', required: false }),
    __metadata("design:type", Number)
], EmployeeResponseDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company ID' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], EmployeeResponseDto.prototype, "updatedAt", void 0);
class EmployeesListResponseDto {
    employees;
    total;
}
exports.EmployeesListResponseDto = EmployeesListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of employees', type: [EmployeeResponseDto] }),
    __metadata("design:type", Array)
], EmployeesListResponseDto.prototype, "employees", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of employees' }),
    __metadata("design:type", Number)
], EmployeesListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=response-dto.js.map