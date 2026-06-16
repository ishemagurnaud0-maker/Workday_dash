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
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ChatsService = class ChatsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createChannel(companyId, name) {
        const channel = await this.prisma.channel.create({
            data: {
                name,
                companyId
            }
        });
        return {
            message: 'Channel created successfully',
            channel
        };
    }
    async getAllChannels(companyId) {
        const channels = this.prisma.channel.findMany({
            where: { companyId },
            include: {
                _count: {
                    select: {
                        messages: true
                    }
                }
            }
        });
        return channels;
    }
    async getChannelMessages(channelId, companyId) {
        const channel = await this.prisma.channel.findUnique({
            where: { id: channelId },
        });
        if (!channel) {
            throw new common_1.NotFoundException('Channel not found');
        }
        if (channel.companyId !== companyId) {
            throw new common_1.ForbiddenException('You are not authorized to access this channel');
        }
        const messages = await this.prisma.message.findMany({
            where: { channelId },
            include: {
                sender: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        return messages;
    }
    async saveMessage(senderId, dto) {
        const channel = await this.prisma.channel.findUnique({
            where: { id: dto.channelId }
        });
        if (!channel) {
            throw new common_1.NotFoundException('Channel not found');
        }
        const message = await this.prisma.message.create({
            data: {
                senderId,
                channelId: dto.channelId,
                content: dto.content
            }
        });
        return {
            message: 'Message sent successfully',
            data: message
        };
    }
    async validateChannelAccess(companyId, channelId) {
        const channel = await this.prisma.channel.findUnique({
            where: {
                id: channelId,
                companyId
            }
        });
        if (!channel) {
            throw new common_1.NotFoundException('Channel not found');
        }
        if (channel.companyId !== companyId) {
            throw new common_1.ForbiddenException('You are not authorized to access this channel');
        }
        return channel;
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatsService);
//# sourceMappingURL=chats.service.js.map