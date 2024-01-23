import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService, PrismaService],
})
export class OwnersModule {}
