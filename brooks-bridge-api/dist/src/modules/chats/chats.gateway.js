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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chats_service_1 = require("./chats.service");
const send_message_dto_1 = require("./dto/send-message.dto");
const join_channel_dto_1 = require("./dto/join-channel.dto");
let ChatsGateway = class ChatsGateway {
    chatsService;
    server;
    connectedUsers = new Map();
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    async handleJoinChannel(dto, client) {
        client.join(dto.channelId);
        console.log(`Client ${client.id} joined channel ${dto.channelId}`);
        return { event: 'joinedChannel', channelId: dto.channelId };
    }
    async handleLeaveChannel(client, dto) {
        client.leave(dto.channelId);
        console.log(`Client ${client.id} left channel ${dto.channelId}`);
        return { event: 'LeftChannel', channelId: dto.channelId };
    }
    async handleMessage(client, dto) {
        const senderId = this.connectedUsers.get(client.id);
        if (!senderId) {
            client.emit('error', { message: 'Unauthorized' });
            return;
        }
        const message = await this.chatsService.saveMessage(senderId, dto);
        this.server.to(dto.channelId).emit('New message', message);
        return message;
    }
    async handleAuthenticate(client, data) {
        this.connectedUsers.set(client.id, data.userId);
        console.log(`User ${data.userId} authenticated on socket ${client.id}`);
        return { event: 'authenticated', userId: data.userId };
    }
};
exports.ChatsGateway = ChatsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinChannel'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_channel_dto_1.JoinChannelDto, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatsGateway.prototype, "handleJoinChannel", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveChannel'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket,
        join_channel_dto_1.JoinChannelDto]),
    __metadata("design:returntype", Promise)
], ChatsGateway.prototype, "handleLeaveChannel", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessaage'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, send_message_dto_1.SendMessaageDto]),
    __metadata("design:returntype", Promise)
], ChatsGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('authenticate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatsGateway.prototype, "handleAuthenticate", null);
exports.ChatsGateway = ChatsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: { origin: "*" },
        namespace: 'chat'
    }),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsGateway);
//# sourceMappingURL=chats.gateway.js.map