import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateChannelDto {
  @ApiProperty({ description: 'Channel name', example: 'general' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
