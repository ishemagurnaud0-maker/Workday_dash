import { ApiProperty } from '@nestjs/swagger';

export class SalaryPaymentResponseDto {
  @ApiProperty({ description: 'Payment ID' })
  paymentId: string;

  @ApiProperty({ description: 'Payroll ID' })
  payrollId: string;

  @ApiProperty({ description: 'Payment status' })
  status: string;

  @ApiProperty({ description: 'Stripe payment intent ID' })
  stripePaymentIntentId: string;

  @ApiProperty({ description: 'Payment client secret' })
  clientSecret: string;

  @ApiProperty({ description: 'Employee ID' })
  employeeId: string;

  @ApiProperty({ description: 'Amount to be paid' })
  amount: number;

  @ApiProperty({ description: 'Payment creation timestamp' })
  createdAt: string;
}

export class PaymentHistoryResponseDto {
  @ApiProperty({ description: 'Array of payroll records' })
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

  @ApiProperty({ description: 'Total number of payroll records' })
  total: number;

  @ApiProperty({ description: 'Total amount paid' })
  totalAmount: number;
}

export class PaymentWebhookResponseDto {
  @ApiProperty({ description: 'Webhook processing status' })
  received: boolean;

  @ApiProperty({ description: 'Event type processed', required: false })
  eventType?: string;

  @ApiProperty({ description: 'Processing message', required: false })
  message?: string;
}
