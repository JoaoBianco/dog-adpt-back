import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DogsModule } from './dogs/dogs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BucketModule } from './bucket/bucket.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DogsModule,
    UsersModule,
    AuthModule,
    BucketModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
