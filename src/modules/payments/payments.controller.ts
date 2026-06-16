import { Controller, Get, Post, Body, RawBodyRequest, Param, Headers,Req } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaySalaryDto } from './dto/pay-salary.dto'
import { CurrentUser } from 'src/common/decorators/current-user-decorator';
import { Public } from '../../common/decorators/public.decorator';
import { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiHeader, ApiParam } from '@nestjs/swagger';
import { PaymentHistoryResponseDto, PaymentWebhookResponseDto, SalaryPaymentResponseDto } from './dto/response-dto';

@ApiTags('Payments')
@ApiBearerAuth()
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

@Post('salary')
@ApiOperation({ summary: 'Pay employee salary' })
@ApiResponse({ status: 201, description: 'Salary payment initiated successfully', type: SalaryPaymentResponseDto })
@ApiResponse({ status: 400, description: 'Bad Request' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
payEmployee(@CurrentUser() user,@Body() dto:PaySalaryDto){
  return this.paymentsService.paySalary(user.companyId,dto);
}

@Get('history')
@ApiOperation({ summary: 'Get payroll history for the company' })
@ApiResponse({ status: 200, description: 'Payroll history retrieved successfully', type: PaymentHistoryResponseDto })
@ApiResponse({ status: 401, description: 'Unauthorized' })
getPayRollHistory(@CurrentUser() user){
  return this.paymentsService.getHistory(user.companyId);
}

@Get('history/:id')
@ApiOperation({ summary: 'Get payment history for a specific employee' })
@ApiParam({ name: 'id', description: 'Employee ID' })
@ApiResponse({ status: 200, description: 'Employee payment history retrieved successfully', type: PaymentHistoryResponseDto })
@ApiResponse({ status: 404, description: 'Employee not found' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
getHistoryOfEmployee(@CurrentUser() user,@Param('employeeId') employeeId:string) {
  return this.paymentsService.getEmployeeHistory(user.companyId,employeeId);
}

@Public()
@Post('webhook')
@ApiOperation({ summary: 'Handle Stripe webhook events' })
@ApiHeader({ name: 'stripe-signature', description: 'Stripe signature for webhook verification', required: true })
@ApiResponse({ status: 200, description: 'Webhook processed successfully', type: PaymentWebhookResponseDto })
@ApiResponse({ status: 400, description: 'Invalid webhook signature' })
handleWebhook(@Headers('stripe-signature') signature:string,@Req() req:RawBodyRequest<Request>){
  if (!req.rawBody) {
    throw new Error('Raw body is required for webhook processing');
  }
  return this.paymentsService.handleWebhook(signature,req.rawBody);
}
 
}
