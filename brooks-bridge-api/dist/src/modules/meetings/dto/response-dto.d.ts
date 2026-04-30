export declare class MeetingResponseDto {
    id: string;
    title: string;
    description?: string;
    scheduledDate: string;
    duration: number;
    location?: string;
    type: string;
    status: string;
    organizerId: string;
    companyId: string;
    participants: string[];
    createdAt: string;
    updatedAt: string;
}
export declare class MeetingsListResponseDto {
    meetings: MeetingResponseDto[];
    total: number;
}
