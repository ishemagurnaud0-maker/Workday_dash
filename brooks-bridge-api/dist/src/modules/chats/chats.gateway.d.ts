import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
import { SendMessaageDto } from './dto/send-message.dto';
import { JoinChannelDto } from './dto/join-channel.dto';
export declare class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly chatsService;
    server: Server;
    private connectedUsers;
    constructor(chatsService: ChatsService);
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleJoinChannel(dto: JoinChannelDto, client: Socket): Promise<{
        event: string;
        channelId: string;
    }>;
    handleLeaveChannel(client: Socket, dto: JoinChannelDto): Promise<{
        event: string;
        channelId: string;
    }>;
    handleMessage(client: Socket, dto: SendMessaageDto): Promise<{
        message: string;
        data: {
            id: string;
            createdAt: Date;
            content: string;
            channelId: string;
            meetingLink: string | null;
            senderId: string;
        };
    } | undefined>;
    handleAuthenticate(client: Socket, data: {
        userId: string;
    }): Promise<{
        event: string;
        userId: string;
    }>;
}
