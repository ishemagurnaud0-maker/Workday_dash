import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CurrentUser } from '../../common/decorators/current-user-decorator'
import { channel } from 'node:diagnostics_channel';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiBody } from '@nestjs/swagger';
import { ChannelResponseDto, ChannelsListResponseDto, MessagesListResponseDto } from './dto/response-dto';
import { CreateChannelDto } from './dto/create-channel.dto';



@ApiTags('Chats')
@ApiBearerAuth()
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

@Post('create-channel')
@ApiOperation({ summary: 'Create a new chat channel' })
@ApiBody({ type: CreateChannelDto })
@ApiResponse({ status: 201, description: 'Channel created successfully', type: ChannelResponseDto })
@ApiResponse({ status: 400, description: 'Bad Request' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
createChannel(@CurrentUser() user,@Body() createChannelDto:CreateChannelDto){
  return this.chatsService.createChannel(user.companyId,createChannelDto.name);
}

@Get('channels')
@ApiOperation({ summary: 'Get all chat channels for the company' })
@ApiResponse({ status: 200, description: 'Channels retrieved successfully', type: ChannelsListResponseDto })
@ApiResponse({ status: 401, description: 'Unauthorized' })
getAllChannels(@CurrentUser() user){
  return this.chatsService.getAllChannels(user.companyId);
}

@Get('channels/:channelId/messages')
@ApiOperation({ summary: 'Get messages for a specific channel' })
@ApiParam({ name: 'channelId', description: 'Channel ID' })
@ApiResponse({ status: 200, description: 'Messages retrieved successfully', type: MessagesListResponseDto })
@ApiResponse({ status: 404, description: 'Channel not found' })
@ApiResponse({ status: 401, description: 'Unauthorized' })
getMessages(@CurrentUser() user,@Param('channelId') channelId:string ){
  return this.chatsService.getChannelMessages(user.companyId,channelId);
}



}
