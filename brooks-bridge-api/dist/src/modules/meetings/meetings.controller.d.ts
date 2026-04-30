import { MeetingsService } from './meetings.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
export declare class MeetingsController {
    private readonly meetingsService;
    constructor(meetingsService: MeetingsService);
    create(user: any, dto: CreateMeetingDto): Promise<{
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
    getAll(user: any): Promise<{
        id: string;
        companyId: string;
        createdAt: Date;
        title: string;
        departmentId: string | null;
        link: string;
        scheduledAt: Date;
    }[]>;
    getOne(user: any, meetingId: string): Promise<{
        id: string;
        companyId: string;
        createdAt: Date;
        title: string;
        departmentId: string | null;
        link: string;
        scheduledAt: Date;
    }>;
    update(user: any, meetingId: string, dto: UpdateMeetingDto): Promise<{
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
    delete(user: any, meetingId: string): Promise<{
        message: string;
    }>;
}
