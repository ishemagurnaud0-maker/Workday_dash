export declare class SalaryPaymentResponseDto {
    paymentId: string;
    payrollId: string;
    status: string;
    stripePaymentIntentId: string;
    clientSecret: string;
    employeeId: string;
    amount: number;
    createdAt: string;
}
export declare class PaymentHistoryResponseDto {
    payrollHistory: Array<{
        id: string;
        employeeId: string;
        amount: number;
        status: string;
        paymentDate?: string;
        createdAt: string;
        updatedAt: string;
        employee?: {
            id: string;
            name: string;
            email: string;
        };
    }>;
    total: number;
    totalAmount: number;
}
export declare class PaymentWebhookResponseDto {
    received: boolean;
    eventType?: string;
    message?: string;
}
