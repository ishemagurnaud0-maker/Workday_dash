import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/common/decorators/current-user-decorator';
import { UpdateEmailDto } from './dto/update-email.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { EmployeeResponseDto, EmployeesListResponseDto } from './dto/response-dto';


@ApiTags('Employees')
@ApiBearerAuth()
@Controller('employees')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiResponse({ status: 201, description: 'Employee successfully created', type: EmployeeResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@CurrentUser() user,@Body()dto:CreateUserDto ){
    return this.usersService.createEmployee(user.companyId,dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees for the company' })
  @ApiResponse({ status: 200, description: 'List of employees retrieved successfully', type: EmployeesListResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getAll(@CurrentUser() user){
    return this.usersService.getAllEmployees(user.companyId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific employee by ID' })
  @ApiParam({ name: 'id', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee retrieved successfully', type: EmployeeResponseDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  get(@CurrentUser() user,@Param('id') id:string){
    return this.usersService.getOneEmployee(user.companyId,id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an employee' })
  @ApiParam({ name: 'id', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee updated successfully', type: EmployeeResponseDto })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@CurrentUser() user,@Param('id') id:string,@Body() dto:UpdateUserDto ){
    return this.usersService.updateEmployee(id,dto,user.companyId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiParam({ name: 'id', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  delete(@CurrentUser() user,@Param('id') id:string){
    return this.usersService.deleteEmployee(user.companyId,id);
  }

   @Patch(':id/email')
  @ApiOperation({ summary: 'Request email update for an employee' })
  @ApiParam({ name: 'id', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Email update request sent successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  requestEmailUpdate(
    @CurrentUser() user,
    @Param('id') id: string,
    @Body() dto: UpdateEmailDto,
  ) {
    return this.usersService.requestEmailChange(user.companyId, id, dto);
  }

  // ── VERIFY EMAIL UPDATE - verifies OTP & updates email ───
  @Post(':id/verify-email')
  @ApiOperation({ summary: 'Verify email update with OTP' })
  @ApiParam({ name: 'id', description: 'Employee ID' })
  @ApiResponse({ status: 200, description: 'Email updated successfully' })
  @ApiResponse({ status: 400, description: 'Invalid OTP' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  verifyEmailUpdate(
    @CurrentUser() user,
    @Param('id') id: string,
    @Body() dto: VerifyEmailDto,
  ) {
    return this.usersService.verifyEmailUpdate(user.companyId, id, dto);
  }
  
}
