import { PrismaService } from "../../prisma/prisma.service";
import { SendMessaageDto } from './dto/send-message.dto';
export declare class ChatsService {
    private prisma;
    constructor(prisma: PrismaService);
    createChannel(companyId: string, name: string): Promise<{
        message: string;
        channel: {
            name: string;
            id: string;
            companyId: string;
            createdAt: Date;
        };
    }>;
    getAllChannels(companyId: string): Promise<({
        _count: {
            messages: number;
        };
    } & {
        name: string;
        id: string;
        companyId: string;
        createdAt: Date;
    })[]>;
    getChannelMessages(channelId: string, companyId: string): Promise<({
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
    saveMessage(senderId: string, dto: SendMessaageDto): Promise<{
        message: string;
        data: {
            id: string;
            createdAt: Date;
            content: string;
            channelId: string;
            meetingLink: string | null;
            senderId: string;
        };
    }>;
    validateChannelAccess(companyId: string, channelId: string): Promise<{
        name: string;
        id: string;
        companyId: string;
        createdAt: Date;
    }>;
}
