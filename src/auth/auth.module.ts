import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtStrategy } from './strategies/jwt-strategy';
import { JwtAdminStrategy } from './strategies/jwt-admin-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken-strategy';

@Module({
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    PrismaService,
    JwtStrategy,
    JwtAdminStrategy,
    RefreshJwtStrategy,
  ],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
})
export class AuthModule {}
