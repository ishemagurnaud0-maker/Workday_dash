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
exports.ChatsController = void 0;
const common_1 = require("@nestjs/common");
const chats_service_1 = require("./chats.service");
const current_user_decorator_1 = require("../../common/decorators/current-user-decorator");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./dto/response-dto");
const create_channel_dto_1 = require("./dto/create-channel.dto");
let ChatsController = class ChatsController {
    chatsService;
    constructor(chatsService) {
        this.chatsService = chatsService;
    }
    createChannel(user, createChannelDto) {
        return this.chatsService.createChannel(user.companyId, createChannelDto.name);
    }
    getAllChannels(user) {
        return this.chatsService.getAllChannels(user.companyId);
    }
    getMessages(user, channelId) {
        return this.chatsService.getChannelMessages(user.companyId, channelId);
    }
};
exports.ChatsController = ChatsController;
__decorate([
    (0, common_1.Post)('create-channel'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new chat channel' }),
    (0, swagger_1.ApiBody)({ type: create_channel_dto_1.CreateChannelDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Channel created successfully', type: response_dto_1.ChannelResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_channel_dto_1.CreateChannelDto]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "createChannel", null);
__decorate([
    (0, common_1.Get)('channels'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all chat channels for the company' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Channels retrieved successfully', type: response_dto_1.ChannelsListResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "getAllChannels", null);
__decorate([
    (0, common_1.Get)('channels/:channelId/messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Get messages for a specific channel' }),
    (0, swagger_1.ApiParam)({ name: 'channelId', description: 'Channel ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Messages retrieved successfully', type: response_dto_1.MessagesListResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Channel not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('channelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "getMessages", null);
exports.ChatsController = ChatsController = __decorate([
    (0, swagger_1.ApiTags)('Chats'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('chats'),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsController);
//# sourceMappingURL=chats.controller.js.map