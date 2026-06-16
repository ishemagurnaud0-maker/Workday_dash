import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { CurrentUser } from '../../common/decorators/current-user-decorator'
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { MeetingResponseDto, MeetingsListResponseDto } from './dto/response-dto';


@ApiTags('Meetings')
@ApiBearerAuth()
@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new meeting' })
  @ApiResponse({ status: 201, description: 'Meeting successfully created', type: MeetingResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@CurrentUser() user,@Body() dto:CreateMeetingDto){
    return this.meetingsService.createMeeting(user.companyId,user.id,dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all meetings for the user' })
  @ApiResponse({ status: 200, description: 'List of meetings retrieved successfully', type: MeetingsListResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getAll(@CurrentUser() user){
    return this.meetingsService.findAllMeetings(user.companyId,user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific meeting by ID' })
  @ApiParam({ name: 'id', description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting retrieved successfully', type: MeetingResponseDto })
  @ApiResponse({ status: 404, description: 'Meeting not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getOne(@CurrentUser() user, @Param('meetingId') meetingId:string) {
    return this.meetingsService.findOneMeeting(user.companyId,user.id,meetingId);
  }

  @Patch(':id') 
  @ApiOperation({ summary: 'Update a meeting' })
  @ApiParam({ name: 'id', description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting updated successfully', type: MeetingResponseDto })
  @ApiResponse({ status: 404, description: 'Meeting not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  update(@CurrentUser() user,@Param('meetingId') meetingId:string,@Body() dto:UpdateMeetingDto) {
    return this.meetingsService.updateMeeting(user.companyId,meetingId,dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a meeting' })
  @ApiParam({ name: 'id', description: 'Meeting ID' })
  @ApiResponse({ status: 200, description: 'Meeting deleted successfully' })
  @ApiResponse({ status: 404, description: 'Meeting not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  delete(@CurrentUser() user,@Param('meetingId') meetingId:string){
    return this.meetingsService.deleteMeeting(user.companyId,meetingId);
  }
  
}
