import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GamesCreateInput) {
    const { game } = data;

    const gameExist = await this.prisma.games.findFirst({
      where: {
        game,
      },
    });

    if (gameExist) {
      throw new HttpException('Game already exists', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.games.create({
      data,
    });
  }

  findAll() {
    return `This action returns all games`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update() {
    // return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
