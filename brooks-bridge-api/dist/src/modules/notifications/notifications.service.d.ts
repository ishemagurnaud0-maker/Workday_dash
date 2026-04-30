import { CreateNotificationDto } from './dto/create-notification.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { NotificationsGateway } from './notifications.gateway';
export declare class NotificationsService {
    private prisma;
    private notificationGateway;
    constructor(prisma: PrismaService, notificationGateway: NotificationsGateway);
    createNotification(dto: CreateNotificationDto): Promise<{
        message: string;
        id: string;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: string;
        isRead: boolean;
        createAt: Date;
    }>;
    notifyCompany(companyId: string, message: string, type: string): Promise<void[]>;
    getMyNotifications(userId: string): Promise<{
        message: string;
        id: string;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: string;
        isRead: boolean;
        createAt: Date;
    }[]>;
    markAsRead(userId: string, notificationId: string): Promise<{
        message: string;
        id: string;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: string;
        isRead: boolean;
        createAt: Date;
    }>;
    markAsAllRead(userId: string): Promise<{
        message: string;
    }>;
}
