import { PrismaService } from "../../prisma/prisma.service";
import { PaySalaryDto } from './dto/pay-salary.dto';
import { PaymentWebhook } from './payments.webhook';
export declare class PaymentsService {
    private prisma;
    private paymentsWebhook;
    private stripe;
    constructor(prisma: PrismaService, paymentsWebhook: PaymentWebhook);
    paySalary(companyId: string, dto: PaySalaryDto): Promise<{
        message: string;
        clientSecret: string | null;
        payroll: {
            id: string;
            amount: number;
            currency: string | null;
            status: string;
        };
    }>;
    getHistory(companyId: string): Promise<({
        employee: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        employeeId: string;
        amount: number;
        currency: string | null;
        status: string | null;
        paymentDate: Date;
    })[]>;
    handleWebhook(signature: string, rawBody: Buffer): Promise<{
        received: boolean;
    }>;
    getEmployeeHistory(companyId: string, employeeId: string): Promise<void>;
}
