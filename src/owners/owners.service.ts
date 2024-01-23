import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOwnerDto: CreateOwnerDto) {
    return await this.prisma.owner.create({ data: createOwnerDto });
  }

  async findAll() {
    return await this.prisma.owner.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return await this.prisma.owner.update({
      data: updateOwnerDto,
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
