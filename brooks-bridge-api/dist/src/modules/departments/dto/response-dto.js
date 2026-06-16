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
exports.DepartmentsListResponseDto = exports.DepartmentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DepartmentResponseDto {
    id;
    name;
    description;
    companyId;
    employeeCount;
    createdAt;
    updatedAt;
}
exports.DepartmentResponseDto = DepartmentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department ID' }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department name' }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department description', required: false }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company ID' }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of employees in department', required: false }),
    __metadata("design:type", Number)
], DepartmentResponseDto.prototype, "employeeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], DepartmentResponseDto.prototype, "updatedAt", void 0);
class DepartmentsListResponseDto {
    departments;
    total;
}
exports.DepartmentsListResponseDto = DepartmentsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of departments', type: [DepartmentResponseDto] }),
    __metadata("design:type", Array)
], DepartmentsListResponseDto.prototype, "departments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of departments' }),
    __metadata("design:type", Number)
], DepartmentsListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=response-dto.js.map