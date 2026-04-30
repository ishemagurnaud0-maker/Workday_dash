import { RawBodyRequest } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaySalaryDto } from './dto/pay-salary.dto';
import { Request } from 'express';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    payEmployee(user: any, dto: PaySalaryDto): Promise<{
        message: string;
        clientSecret: string | null;
        payroll: {
            id: string;
            amount: number;
            currency: string | null;
            status: string;
        };
    }>;
    getPayRollHistory(user: any): Promise<({
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
    getHistoryOfEmployee(user: any, employeeId: string): Promise<void>;
    handleWebhook(signature: string, req: RawBodyRequest<Request>): Promise<{
        received: boolean;
    }>;
}
