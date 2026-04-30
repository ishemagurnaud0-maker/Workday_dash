export declare class NotificationResponseDto {
    id: string;
    userId: string;
    message: string;
    type: string;
    isRead: boolean;
    createdAt: string;
}
export declare class NotificationsListResponseDto {
    notifications: NotificationResponseDto[];
    total: number;
    unreadCount: number;
}
