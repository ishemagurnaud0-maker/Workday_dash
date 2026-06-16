import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(user: any): Promise<{
        message: string;
        id: string;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: string;
        isRead: boolean;
        createAt: Date;
    }[]>;
    markAsRead(user: any, notificationId: string): Promise<{
        message: string;
        id: string;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: string;
        isRead: boolean;
        createAt: Date;
    }>;
    markAllAsRead(user: any): Promise<{
        message: string;
    }>;
}
