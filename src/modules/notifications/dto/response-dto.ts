import { ApiProperty } from '@nestjs/swagger';

export class NotificationResponseDto {
  @ApiProperty({ description: 'Notification ID' })
  id: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty({ description: 'Notification message' })
  message: string;

  @ApiProperty({ description: 'Notification type' })
  type: string;

  @ApiProperty({ description: 'Read status' })
  isRead: boolean;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;
}

export class NotificationsListResponseDto {
  @ApiProperty({ description: 'Array of notifications', type: [NotificationResponseDto] })
  notifications: NotificationResponseDto[];

  @ApiProperty({ description: 'Total number of notifications' })
  total: number;

  @ApiProperty({ description: 'Number of unread notifications' })
  unreadCount: number;
}
