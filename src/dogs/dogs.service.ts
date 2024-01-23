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

  findAll() {
    return `This action returns all dogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  async update(id: number, updateDogDto: UpdateDogDto) {
    return await this.prisma.dog.update({ data: updateDogDto, where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
