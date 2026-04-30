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
exports.PaymentWebhookResponseDto = exports.PaymentHistoryResponseDto = exports.SalaryPaymentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SalaryPaymentResponseDto {
    paymentId;
    payrollId;
    status;
    stripePaymentIntentId;
    clientSecret;
    employeeId;
    amount;
    createdAt;
}
exports.SalaryPaymentResponseDto = SalaryPaymentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment ID' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "paymentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payroll ID' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "payrollId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment status' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stripe payment intent ID' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "stripePaymentIntentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment client secret' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "clientSecret", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee ID' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount to be paid' }),
    __metadata("design:type", Number)
], SalaryPaymentResponseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment creation timestamp' }),
    __metadata("design:type", String)
], SalaryPaymentResponseDto.prototype, "createdAt", void 0);
class PaymentHistoryResponseDto {
    payrollHistory;
    total;
    totalAmount;
}
exports.PaymentHistoryResponseDto = PaymentHistoryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of payroll records' }),
    __metadata("design:type", Array)
], PaymentHistoryResponseDto.prototype, "payrollHistory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of payroll records' }),
    __metadata("design:type", Number)
], PaymentHistoryResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount paid' }),
    __metadata("design:type", Number)
], PaymentHistoryResponseDto.prototype, "totalAmount", void 0);
class PaymentWebhookResponseDto {
    received;
    eventType;
    message;
}
exports.PaymentWebhookResponseDto = PaymentWebhookResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Webhook processing status' }),
    __metadata("design:type", Boolean)
], PaymentWebhookResponseDto.prototype, "received", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Event type processed', required: false }),
    __metadata("design:type", String)
], PaymentWebhookResponseDto.prototype, "eventType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Processing message', required: false }),
    __metadata("design:type", String)
], PaymentWebhookResponseDto.prototype, "message", void 0);
//# sourceMappingURL=response-dto.js.map