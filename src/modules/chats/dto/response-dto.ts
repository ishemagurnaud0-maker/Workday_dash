import { ApiProperty } from '@nestjs/swagger';

export class ChannelResponseDto {
  @ApiProperty({ description: 'Channel ID' })
  id: string;

  @ApiProperty({ description: 'Channel name' })
  name: string;

  @ApiProperty({ description: 'Company ID' })
  companyId: string;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

export class ChannelsListResponseDto {
  @ApiProperty({ description: 'Array of channels', type: [ChannelResponseDto] })
  channels: ChannelResponseDto[];

  @ApiProperty({ description: 'Total number of channels' })
  total: number;
}

export class MessageResponseDto {
  @ApiProperty({ description: 'Message ID' })
  id: string;

  @ApiProperty({ description: 'Message content' })
  content: string;

  @ApiProperty({ description: 'Sender ID' })
  senderId: string;

  @ApiProperty({ description: 'Channel ID' })
  channelId: string;

  @ApiProperty({ description: 'Sender information', required: false })
  sender?: {
    id: string;
    name: string;
    email: string;
  };

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;
}

export class MessagesListResponseDto {
  @ApiProperty({ description: 'Array of messages', type: [MessageResponseDto] })
  messages: MessageResponseDto[];

  @ApiProperty({ description: 'Total number of messages' })
  total: number;

  @ApiProperty({ description: 'Channel ID' })
  channelId: string;
}
