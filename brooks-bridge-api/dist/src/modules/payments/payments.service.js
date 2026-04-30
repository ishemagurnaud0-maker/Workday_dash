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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const payments_webhook_1 = require("./payments.webhook");
const stripe_1 = __importDefault(require("stripe"));
let PaymentsService = class PaymentsService {
    prisma;
    paymentsWebhook;
    stripe;
    constructor(prisma, paymentsWebhook) {
        this.prisma = prisma;
        this.paymentsWebhook = paymentsWebhook;
        const stripeSecret = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecret)
            throw new common_1.NotFoundException('The stripe secret key field is empty or null.');
        this.stripe = new stripe_1.default(stripeSecret, {
            apiVersion: '2023-10-16'
        });
    }
    async paySalary(companyId, dto) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: dto.employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not found.');
        if (employee.companyId !== companyId)
            throw new common_1.ForbiddenException('Access denied Employee does not belong to your company.');
        const payroll = await this.prisma.payroll.create({
            data: {
                employeeId: dto.employeeId,
                amount: dto.amount,
                currency: dto.currency || 'RWF',
                status: 'Pending',
                paymentDate: new Date(),
            }
        });
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: Math.round(dto.amount * 100),
            currency: dto.currency || 'RWF',
            metadata: {
                payrollId: payroll.id,
                employeeId: dto.employeeId,
                companyId,
                type: 'Salary',
            }
        });
        await this.prisma.payroll.update({
            where: { id: payroll.id },
            data: { status: 'Processing' }
        });
        return {
            message: 'Payment initiated successfully',
            clientSecret: paymentIntent.client_secret,
            payroll: {
                id: payroll.id,
                amount: payroll.amount,
                currency: payroll.currency,
                status: 'Processing'
            }
        };
    }
    async getHistory(companyId) {
        return this.prisma.payroll.findMany({
            where: { employee: { companyId } },
            include: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async handleWebhook(signature, rawBody) {
        return this.paymentsWebhook.handleWebhook(signature, rawBody);
    }
    async getEmployeeHistory(companyId, employeeId) {
        const employee = await this.prisma.employee.findUnique({
            where: { id: employeeId }
        });
        if (!employee)
            throw new common_1.NotFoundException('Employee not found');
        if (employee.companyId !== companyId)
            throw new common_1.ForbiddenException('Access Denied');
        const employeeHistroy = await this.prisma.payroll.findMany({
            where: { employeeId: employeeId },
            orderBy: { createdAt: 'desc' }
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, payments_webhook_1.PaymentWebhook])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map