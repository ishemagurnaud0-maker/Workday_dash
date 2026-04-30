import { Controller,UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterCompanyDto,RegisterOwnerDto,LoginDto } from './dto'
import { Public } from '../../common/decorators/public.decorator'
import { CurrentUser } from '../../common/decorators/current-user-decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Post,Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LoginResponseDto, RegisterResponseDto } from './dto/response-dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register/owner')
  @ApiOperation({ summary: 'Register a new company owner' })
  @ApiResponse({ status: 201, description: 'Owner successfully registered', type: RegisterResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async registerOwner(@Body() user:RegisterOwnerDto){
    return this.authService.registerOwner(user);
  }


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('register/company')
  @ApiOperation({ summary: 'Register a new company under authenticated owner' })
  @ApiResponse({ status: 201, description: 'Company successfully registered', type: RegisterResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
   async registerCompany(@CurrentUser() user,@Body() company:RegisterCompanyDto){
    return this.authService.RegisterCompany(user.id,company);
  }

  @Public()
  @UseGuards()
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login successful', type: LoginResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
   async login(@Body() loginCreds:LoginDto ) {
    return this.authService.login(loginCreds);
   }
  
}
