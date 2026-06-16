import { ChatsService } from './chats.service';
import { CreateChannelDto } from './dto/create-channel.dto';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    createChannel(user: any, createChannelDto: CreateChannelDto): Promise<{
        message: string;
        channel: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    getAllChannels(user: any): Promise<({
        _count: {
            messages: number;
        };
    } & {
        name: string;
        id: string;
        companyId: string;
        createdAt: Date;
    })[]>;
    getMessages(user: any, channelId: string): Promise<({
        sender: {
            name: string;
            email: string;
            phoneNumber: string;
            password: string;
            id: string;
            imgUrl: string | null;
            companyId: string | null;
            isVerified: boolean;
            createdAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        content: string;
        channelId: string;
        meetingLink: string | null;
        senderId: string;
    })[]>;
}
