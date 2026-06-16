import { PrismaService } from "../../prisma/prisma.service";
import { NotificationsService } from "../notifications/notifications.service";
export declare class PaymentWebhook {
    private prisma;
    private notificationService;
    private stripe;
    constructor(prisma: PrismaService, notificationService: NotificationsService);
    handleWebhook(signature: string, rawBody: Buffer): Promise<{
        received: boolean;
    }>;
    private onPaymentSuccess;
    private onPaymentFailed;
}
