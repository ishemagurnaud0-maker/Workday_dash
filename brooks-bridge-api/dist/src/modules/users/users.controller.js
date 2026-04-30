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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user-decorator");
const update_email_dto_1 = require("./dto/update-email.dto");
const verify_email_dto_1 = require("./dto/verify-email.dto");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./dto/response-dto");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(user, dto) {
        return this.usersService.createEmployee(user.companyId, dto);
    }
    getAll(user) {
        return this.usersService.getAllEmployees(user.companyId);
    }
    get(user, id) {
        return this.usersService.getOneEmployee(user.companyId, id);
    }
    update(user, id, dto) {
        return this.usersService.updateEmployee(id, dto, user.companyId);
    }
    delete(user, id) {
        return this.usersService.deleteEmployee(user.companyId, id);
    }
    requestEmailUpdate(user, id, dto) {
        return this.usersService.requestEmailChange(user.companyId, id, dto);
    }
    verifyEmailUpdate(user, id, dto) {
        return this.usersService.verifyEmailUpdate(user.companyId, id, dto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new employee' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Employee successfully created', type: response_dto_1.EmployeeResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all employees for the company' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of employees retrieved successfully', type: response_dto_1.EmployeesListResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific employee by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Employee retrieved successfully', type: response_dto_1.EmployeeResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an employee' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Employee updated successfully', type: response_dto_1.EmployeeResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an employee' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Employee deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id/email'),
    (0, swagger_1.ApiOperation)({ summary: 'Request email update for an employee' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Email update request sent successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_email_dto_1.UpdateEmailDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "requestEmailUpdate", null);
__decorate([
    (0, common_1.Post)(':id/verify-email'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify email update with OTP' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Email updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid OTP' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, verify_email_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "verifyEmailUpdate", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Employees'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map