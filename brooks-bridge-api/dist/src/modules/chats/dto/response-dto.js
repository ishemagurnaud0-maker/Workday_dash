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
exports.MessagesListResponseDto = exports.MessageResponseDto = exports.ChannelsListResponseDto = exports.ChannelResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ChannelResponseDto {
    id;
    name;
    companyId;
    createdAt;
    updatedAt;
}
exports.ChannelResponseDto = ChannelResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel ID' }),
    __metadata("design:type", String)
], ChannelResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel name' }),
    __metadata("design:type", String)
], ChannelResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company ID' }),
    __metadata("design:type", String)
], ChannelResponseDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], ChannelResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], ChannelResponseDto.prototype, "updatedAt", void 0);
class ChannelsListResponseDto {
    channels;
    total;
}
exports.ChannelsListResponseDto = ChannelsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of channels', type: [ChannelResponseDto] }),
    __metadata("design:type", Array)
], ChannelsListResponseDto.prototype, "channels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of channels' }),
    __metadata("design:type", Number)
], ChannelsListResponseDto.prototype, "total", void 0);
class MessageResponseDto {
    id;
    content;
    senderId;
    channelId;
    sender;
    createdAt;
}
exports.MessageResponseDto = MessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message ID' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message content' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sender ID' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "senderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel ID' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "channelId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sender information', required: false }),
    __metadata("design:type", Object)
], MessageResponseDto.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "createdAt", void 0);
class MessagesListResponseDto {
    messages;
    total;
    channelId;
}
exports.MessagesListResponseDto = MessagesListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of messages', type: [MessageResponseDto] }),
    __metadata("design:type", Array)
], MessagesListResponseDto.prototype, "messages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of messages' }),
    __metadata("design:type", Number)
], MessagesListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Channel ID' }),
    __metadata("design:type", String)
], MessagesListResponseDto.prototype, "channelId", void 0);
//# sourceMappingURL=response-dto.js.map