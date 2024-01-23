import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DogsModule } from './dogs/dogs.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [DogsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
