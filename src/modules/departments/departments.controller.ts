import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { CurrentUser } from 'src/common/decorators/current-user-decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { DepartmentResponseDto, DepartmentsListResponseDto } from './dto/response-dto';


@ApiTags('Departments')
@ApiBearerAuth()
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post('create-depart')
  @ApiOperation({ summary: 'Create a new department' })
  @ApiResponse({ status: 201, description: 'Department successfully created', type: DepartmentResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
   createDepartment(@CurrentUser() user, @Body() dto:CreateDepartmentDto){
      return  this.departmentsService.createDepartment(user.companyId,dto);
  }

 @Get()
 @ApiOperation({ summary: 'Get all departments for the company' })
 @ApiResponse({ status: 200, description: 'Departments retrieved successfully', type: DepartmentsListResponseDto })
 @ApiResponse({ status: 401, description: 'Unauthorized' })
   getAllDepartments(@CurrentUser() user){
    return  this.departmentsService.getAllDepartments(user.companyId);
  }

@Get(':id')
@ApiOperation({ summary: 'Get a specific department by ID' })
@ApiParam({ name: 'id', description: 'Department ID' })
@ApiResponse({ status: 200, description: 'Department retrieved successfully', type: DepartmentResponseDto })
@ApiResponse({ status: 404, description: 'Department not found' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
   getDepartment(@CurrentUser() userInfo, @Param('id') id:string){
    return this.departmentsService.getDepartment(userInfo.companyId,id);
}

@Patch(':id')
@ApiOperation({ summary: 'Update a department' })
@ApiParam({ name: 'id', description: 'Department ID' })
@ApiResponse({ status: 200, description: 'Department updated successfully', type: DepartmentResponseDto })
@ApiResponse({ status: 404, description: 'Department not found' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
   updateDepartment(@CurrentUser() userInfo, @Param('id') id:string, @Body() dto:UpdateDepartmentDto){
    return this.departmentsService.updateDepartment(userInfo.companyId,id,dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department' })
  @ApiParam({ name: 'id', description: 'Department ID' })
  @ApiResponse({ status: 200, description: 'Department deleted successfully' })
  @ApiResponse({ status: 404, description: 'Department not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
   deleteDepartment(@CurrentUser() userInfo, @Param('id') id:string){
    return this.departmentsService.deleteDepartment(userInfo.companyId,id);
  }
  
}
