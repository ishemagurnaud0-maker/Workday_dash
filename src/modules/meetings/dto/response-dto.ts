import { ApiProperty } from '@nestjs/swagger';

export class MeetingResponseDto {
  @ApiProperty({ description: 'Meeting ID' })
  id: string;

  @ApiProperty({ description: 'Meeting title' })
  title: string;

  @ApiProperty({ description: 'Meeting description', required: false })
  description?: string;

  @ApiProperty({ description: 'Meeting scheduled date and time' })
  scheduledDate: string;

  @ApiProperty({ description: 'Meeting duration in minutes' })
  duration: number;

  @ApiProperty({ description: 'Meeting location', required: false })
  location?: string;

  @ApiProperty({ description: 'Meeting type' })
  type: string;

  @ApiProperty({ description: 'Meeting status' })
  status: string;

  @ApiProperty({ description: 'Organizer ID' })
  organizerId: string;

  @ApiProperty({ description: 'Company ID' })
  companyId: string;

  @ApiProperty({ description: 'Array of participant IDs', type: [String] })
  participants: string[];

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: string;
}

export class MeetingsListResponseDto {
  @ApiProperty({ description: 'Array of meetings', type: [MeetingResponseDto] })
  meetings: MeetingResponseDto[];

  @ApiProperty({ description: 'Total number of meetings' })
  total: number;
}
