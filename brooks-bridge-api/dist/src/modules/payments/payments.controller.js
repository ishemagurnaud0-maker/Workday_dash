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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const payments_service_1 = require("./payments.service");
const pay_salary_dto_1 = require("./dto/pay-salary.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user-decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./dto/response-dto");
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    payEmployee(user, dto) {
        return this.paymentsService.paySalary(user.companyId, dto);
    }
    getPayRollHistory(user) {
        return this.paymentsService.getHistory(user.companyId);
    }
    getHistoryOfEmployee(user, employeeId) {
        return this.paymentsService.getEmployeeHistory(user.companyId, employeeId);
    }
    handleWebhook(signature, req) {
        if (!req.rawBody) {
            throw new Error('Raw body is required for webhook processing');
        }
        return this.paymentsService.handleWebhook(signature, req.rawBody);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('salary'),
    (0, swagger_1.ApiOperation)({ summary: 'Pay employee salary' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Salary payment initiated successfully', type: response_dto_1.SalaryPaymentResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pay_salary_dto_1.PaySalaryDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "payEmployee", null);
__decorate([
    (0, common_1.Get)('history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payroll history for the company' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Payroll history retrieved successfully', type: response_dto_1.PaymentHistoryResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getPayRollHistory", null);
__decorate([
    (0, common_1.Get)('history/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment history for a specific employee' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Employee payment history retrieved successfully', type: response_dto_1.PaymentHistoryResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Employee not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('employeeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getHistoryOfEmployee", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('webhook'),
    (0, swagger_1.ApiOperation)({ summary: 'Handle Stripe webhook events' }),
    (0, swagger_1.ApiHeader)({ name: 'stripe-signature', description: 'Stripe signature for webhook verification', required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Webhook processed successfully', type: response_dto_1.PaymentWebhookResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid webhook signature' }),
    __param(0, (0, common_1.Headers)('stripe-signature')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "handleWebhook", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map