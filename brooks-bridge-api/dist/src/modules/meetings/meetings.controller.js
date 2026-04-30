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
exports.MeetingsController = void 0;
const common_1 = require("@nestjs/common");
const meetings_service_1 = require("./meetings.service");
const create_meeting_dto_1 = require("./dto/create-meeting.dto");
const update_meeting_dto_1 = require("./dto/update-meeting.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user-decorator");
const swagger_1 = require("@nestjs/swagger");
const response_dto_1 = require("./dto/response-dto");
let MeetingsController = class MeetingsController {
    meetingsService;
    constructor(meetingsService) {
        this.meetingsService = meetingsService;
    }
    create(user, dto) {
        return this.meetingsService.createMeeting(user.companyId, user.id, dto);
    }
    getAll(user) {
        return this.meetingsService.findAllMeetings(user.companyId, user.id);
    }
    getOne(user, meetingId) {
        return this.meetingsService.findOneMeeting(user.companyId, user.id, meetingId);
    }
    update(user, meetingId, dto) {
        return this.meetingsService.updateMeeting(user.companyId, meetingId, dto);
    }
    delete(user, meetingId) {
        return this.meetingsService.deleteMeeting(user.companyId, meetingId);
    }
};
exports.MeetingsController = MeetingsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new meeting' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Meeting successfully created', type: response_dto_1.MeetingResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_meeting_dto_1.CreateMeetingDto]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all meetings for the user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of meetings retrieved successfully', type: response_dto_1.MeetingsListResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific meeting by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Meeting ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Meeting retrieved successfully', type: response_dto_1.MeetingResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Meeting not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('meetingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a meeting' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Meeting ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Meeting updated successfully', type: response_dto_1.MeetingResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Meeting not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('meetingId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_meeting_dto_1.UpdateMeetingDto]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a meeting' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Meeting ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Meeting deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Meeting not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('meetingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MeetingsController.prototype, "delete", null);
exports.MeetingsController = MeetingsController = __decorate([
    (0, swagger_1.ApiTags)('Meetings'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('meetings'),
    __metadata("design:paramtypes", [meetings_service_1.MeetingsService])
], MeetingsController);
//# sourceMappingURL=meetings.controller.js.map