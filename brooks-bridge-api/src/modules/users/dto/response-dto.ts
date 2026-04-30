import { ApiProperty } from '@nestjs/swagger';

export class EmployeeResponseDto {
  @ApiProperty({ description: 'Employee ID' })
  id: string;

  @ApiProperty({ description: 'Employee name' })
  name: string;

  @ApiProperty({ description: 'Employee email' })
  email: string;

  @ApiProperty({ description: 'Employee role' })
  role: string;

  @ApiProperty({ description: 'Employee department ID', required: false })
  departmentId?: string;

  @ApiProperty({ description: 'Employee phone number', required: false })
  phone?: string;

  @ApiProperty({ description: 'Employee address', required: false })
  address?: string;

  @ApiProperty({ description: 'Employee hire date' })
  hireDate: string;

  @ApiProperty({ description: 'Employee salary', required: false })
  salary?: number;

  @ApiProperty({ description: 'Company ID' })
  companyId: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

export class EmployeesListResponseDto {
  @ApiProperty({ description: 'Array of employees', type: [EmployeeResponseDto] })
  employees: EmployeeResponseDto[];

  @ApiProperty({ description: 'Total number of employees' })
  total: number;
}
