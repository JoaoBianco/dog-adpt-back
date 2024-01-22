import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Owner } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(public prisma: PrismaService) {}

  async getHello(): Promise<Array<Owner>> {
    return await this.prisma.owner.findMany();
  }
}
