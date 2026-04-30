import { ApiProperty } from '@nestjs/swagger';

export class DepartmentResponseDto {
  @ApiProperty({ description: 'Department ID' })
  id: string;

  @ApiProperty({ description: 'Department name' })
  name: string;

  @ApiProperty({ description: 'Department description', required: false })
  description?: string;

  @ApiProperty({ description: 'Company ID' })
  companyId: string;

  @ApiProperty({ description: 'Number of employees in department', required: false })
  employeeCount?: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

export class DepartmentsListResponseDto {
  @ApiProperty({ description: 'Array of departments', type: [DepartmentResponseDto] })
  departments: DepartmentResponseDto[];

  @ApiProperty({ description: 'Total number of departments' })
  total: number;
}
