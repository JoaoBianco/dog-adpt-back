import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user) {
    return await this.authService.login(user);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refresh(@Body() user) {
    return await this.authService.refresh(user.refresh_token);
  }
}
