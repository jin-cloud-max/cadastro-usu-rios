import { Prisma } from '@prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GenresCreateInput) {
    const { name } = data;

    const findGenre = await this.prisma.genres.findFirst({
      where: {
        name,
      },
    });

    if (findGenre) {
      throw new HttpException('Genre already exists', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.genres.create({
      data,
    });
  }

  findAll() {
    return `This action returns all genres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
