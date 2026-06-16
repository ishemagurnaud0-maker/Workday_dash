"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const chats_service_1 = require("../chats/chats.service");
const notifications_service_1 = require("../notifications/notifications.service");
let MeetingsService = class MeetingsService {
    prisma;
    chatsService;
    notificationsService;
    constructor(prisma, chatsService, notificationsService) {
        this.prisma = prisma;
        this.chatsService = chatsService;
        this.notificationsService = notificationsService;
    }
    async createMeeting(companyId, userId, dto) {
        const meetingCreator = await this.prisma.user.findUnique({
            where: { id: userId }
        });
        if (!meetingCreator)
            throw new common_1.NotFoundException('You do not have an account.');
        if (meetingCreator.companyId !== companyId)
            throw new common_1.ForbiddenException('You are not authorized to create a meeting for this company.');
        const meeting = await this.prisma.meeting.create({
            data: {
                title: dto.title,
                link: dto.link,
                scheduledAt: dto.scheduledDate,
                departmentId: dto.departmentId,
                companyId
            }
        });
        await this.notificationsService.notifyCompany(companyId, `New meeting scheduled: ${dto.title} at/on ${dto.scheduledDate} `, 'MEETING');
        const channels = await this.chatsService.getAllChannels(companyId);
        const generalChannel = channels.find((c) => c.name === 'general');
        if (generalChannel) {
            await this.chatsService.saveMessage(userId, {
                channelId: generalChannel.id,
                content: `New meeting scheduled : ${dto.title} on/at ${new Date(dto.scheduledDate)} 
                `,
                meetingLink: dto.link,
            });
        }
        return {
            message: 'Created Meeting successfully.',
            meeting,
        };
    }
    async findAllMeetings(companyId, userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId }
        });
        if (user?.companyId === null) {
            throw new common_1.NotFoundException(`Dear ${user.name} please create a company.`);
        }
        const meetings = await this.prisma.meeting.findMany({
            where: { companyId }
        });
        return meetings;
    }
    async findOneMeeting(companyId, userId, meetingId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId }
        });
        if (user?.companyId === null) {
            throw new common_1.NotFoundException(`Dear ${user.name} please create a company.`);
        }
        const meeting = await this.prisma.meeting.findUnique({
            where: { id: meetingId }
        });
        if (!meeting)
            throw new common_1.NotFoundException('Meeting not found.');
        if (meeting.companyId !== companyId)
            throw new common_1.ForbiddenException("You are authorized to see this meeting's content");
        return meeting;
    }
    async updateMeeting(companyId, meetingId, dto) {
        const meeting = await this.prisma.meeting.findUnique({
            where: { id: meetingId }
        });
        if (!meeting)
            throw new common_1.NotFoundException("Meeting not found.");
        if (meeting.companyId !== companyId)
            throw new common_1.ForbiddenException("You are not authorized to edit this meeting's content");
        const updatedMeeting = await this.prisma.meeting.update({
            where: { id: meetingId },
            data: { ...dto,
                scheduledAt: dto.scheduledDate ? new Date(dto.scheduledDate) : undefined
            }
        });
        return {
            message: 'Meeting updated successfully',
            meeting: updatedMeeting,
        };
    }
    async deleteMeeting(companyId, meetingId) {
        const meeting = await this.prisma.meeting.findUnique({
            where: { id: meetingId }
        });
        if (!meeting)
            throw new common_1.NotFoundException('Meeting not found');
        if (meeting.companyId !== companyId) {
            throw new common_1.ForbiddenException('You can not delete this meeting and its contents.');
        }
        await this.prisma.meeting.delete({
            where: { id: meetingId }
        });
        return { message: 'Meeting has been deleted successfully.' };
    }
};
exports.MeetingsService = MeetingsService;
exports.MeetingsService = MeetingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, chats_service_1.ChatsService, notifications_service_1.NotificationsService])
], MeetingsService);
//# sourceMappingURL=meetings.service.js.map