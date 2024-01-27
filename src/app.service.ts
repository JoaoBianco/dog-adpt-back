import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(public prisma: PrismaService) {}

  async getHello(): Promise<Array<User>> {
    return await this.prisma.user.findMany();
  }
}
