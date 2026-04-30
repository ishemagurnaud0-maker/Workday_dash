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
exports.MeetingsListResponseDto = exports.MeetingResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MeetingResponseDto {
    id;
    title;
    description;
    scheduledDate;
    duration;
    location;
    type;
    status;
    organizerId;
    companyId;
    participants;
    createdAt;
    updatedAt;
}
exports.MeetingResponseDto = MeetingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting ID' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting title' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting description', required: false }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting scheduled date and time' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "scheduledDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting duration in minutes' }),
    __metadata("design:type", Number)
], MeetingResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting location', required: false }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting type' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Meeting status' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Organizer ID' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "organizerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company ID' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "companyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of participant IDs', type: [String] }),
    __metadata("design:type", Array)
], MeetingResponseDto.prototype, "participants", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", String)
], MeetingResponseDto.prototype, "updatedAt", void 0);
class MeetingsListResponseDto {
    meetings;
    total;
}
exports.MeetingsListResponseDto = MeetingsListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of meetings', type: [MeetingResponseDto] }),
    __metadata("design:type", Array)
], MeetingsListResponseDto.prototype, "meetings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of meetings' }),
    __metadata("design:type", Number)
], MeetingsListResponseDto.prototype, "total", void 0);
//# sourceMappingURL=response-dto.js.map