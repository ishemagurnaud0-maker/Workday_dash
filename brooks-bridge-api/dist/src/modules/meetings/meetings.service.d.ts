import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { ChatsService } from '../chats/chats.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class MeetingsService {
    private prisma;
    private chatsService;
    private notificationsService;
    constructor(prisma: PrismaService, chatsService: ChatsService, notificationsService: NotificationsService);
    createMeeting(companyId: string, userId: string, dto: CreateMeetingDto): Promise<{
        message: string;
        meeting: {
            id: string;
            companyId: string;
            createdAt: Date;
            title: string;
            departmentId: string | null;
            link: string;
            scheduledAt: Date;
        };
    }>;
    findAllMeetings(companyId: string, userId: string): Promise<{
        id: string;
        companyId: string;
        createdAt: Date;
        title: string;
        departmentId: string | null;
        link: string;
        scheduledAt: Date;
    }[]>;
    findOneMeeting(companyId: string, userId: string, meetingId: string): Promise<{
        id: string;
        companyId: string;
        createdAt: Date;
        title: string;
        departmentId: string | null;
        link: string;
        scheduledAt: Date;
    }>;
    updateMeeting(companyId: string, meetingId: any, dto: UpdateMeetingDto): Promise<{
        message: string;
        meeting: {
            id: string;
            companyId: string;
            createdAt: Date;
            title: string;
            departmentId: string | null;
            link: string;
            scheduledAt: Date;
        };
    }>;
    deleteMeeting(companyId: string, meetingId: string): Promise<{
        message: string;
    }>;
}
