import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { CurrentUser } from '../../common/decorators/current-user-decorator'
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { NotificationsListResponseDto, NotificationResponseDto } from './dto/response-dto';


@ApiTags('Notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all notifications for the current user' })
  @ApiResponse({ status: 200, description: 'Notifications retrieved successfully', type: NotificationsListResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  findAll(@CurrentUser() user) {
   return this.notificationsService.getMyNotifications(user.id,);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mark a notification as read' })
  @ApiParam({ name: 'id', description: 'Notification ID' })
  @ApiResponse({ status: 200, description: 'Notification marked as read', type: NotificationResponseDto })
  @ApiResponse({ status: 404, description: 'Notification not found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  markAsRead(@CurrentUser() user,@Param('notificationId') notificationId:string ){
    return this.notificationsService.markAsRead(user.id,notificationId); 
  }

  @Patch()
  @ApiOperation({ summary: 'Mark all notifications as read for the current user' })
  @ApiResponse({ status: 200, description: 'All notifications marked as read' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  markAllAsRead(@CurrentUser() user){
  return this.notificationsService.markAsAllRead(user.id);
 }

 
}
