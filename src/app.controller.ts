import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Owner } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Array<Owner>> {
    return this.appService.getHello();
  }
}
