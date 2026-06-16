import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private connectedUsers;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleAuthenticate(client: Socket, data: {
        userId: string;
    }): {
        event: string;
        userId: string;
    };
    sendNotificationToCompany(userIds: string[], notification: any): void;
    sendNotificationToUser(userId: string, notification: any): void;
}
