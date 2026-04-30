import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'User information' })
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    companyId?: string;
  };
}

export class RegisterResponseDto {
  @ApiProperty({ description: 'Success message' })
  message: string;

  @ApiProperty({ description: 'Created user information' })
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    companyId?: string;
  };

  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;
}
