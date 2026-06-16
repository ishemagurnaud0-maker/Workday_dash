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
exports.PaymentWebhook = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const stripe_1 = __importDefault(require("stripe"));
const notifications_service_1 = require("../notifications/notifications.service");
let PaymentWebhook = class PaymentWebhook {
    prisma;
    notificationService;
    stripe;
    constructor(prisma, notificationService) {
        this.prisma = prisma;
        this.notificationService = notificationService;
        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecretKey) {
            throw new Error('STRIPE_SECRET_KEY environment variable is not defined');
        }
        this.stripe = new stripe_1.default(stripeSecretKey, {
            apiVersion: '2023-10-16'
        });
    }
    async handleWebhook(signature, rawBody) {
        let event;
        try {
            const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
            if (!webhookSecret) {
                throw new Error('STRIPE_WEBHOOK_SECRET environment variable is not defined');
            }
            event = this.stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
        }
        catch (err) {
            throw new common_1.BadRequestException(`Webhook error: ${err.message}`);
        }
        switch (event.type) {
            case 'payment_intent.succeeded':
                await this.onPaymentSuccess(event.data.object);
                break;
            case 'payment_intent.payment_failed':
                await this.onPaymentFailed(event.data.object);
                break;
            default:
                console.log(`Unhandled event: ${event.type}`);
        }
        return { received: true };
    }
    async onPaymentSuccess(PaymentIntent) {
        const { payrollId, employeeId } = PaymentIntent.metadata;
        await this.prisma.payroll.update({
            where: { id: payrollId },
            data: {
                status: 'Payment successfull'
            }
        });
        await this.notificationService.createNotification({
            userId: employeeId,
            message: 'Your salary has been processed successfully.',
            type: 'PAYMENT'
        });
        console.log(`Payment succeeded for payroll: ${payrollId}`);
    }
    async onPaymentFailed(PaymentIntent) {
        const { payrollId, employeeId } = PaymentIntent.metadata;
        await this.prisma.payroll.update({
            where: { id: payrollId },
            data: { status: 'Payment failed.' }
        });
        await this.notificationService.createNotification({
            userId: employeeId,
            message: 'Your salary has failed to be processed.Please contact your manager.',
            type: 'PAYMENT'
        });
        console.log(`Payment failed for payroll: ${payrollId}`);
    }
};
exports.PaymentWebhook = PaymentWebhook;
exports.PaymentWebhook = PaymentWebhook = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, notifications_service_1.NotificationsService])
], PaymentWebhook);
//# sourceMappingURL=payments.webhook.js.map