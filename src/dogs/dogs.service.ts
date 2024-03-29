import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DogsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDogDto: CreateDogDto) {
    return await this.prisma.dog.create({ data: createDogDto });
  }

  async findAll() {
    return await this.prisma.dog.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.dog.findUnique({ where: { id } });
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    return await this.prisma.dog.update({ data: updateDogDto, where: { id } });
  }

  async remove(id: number) {
    return await this.prisma.dog.delete({ where: { id } });
  }
}
