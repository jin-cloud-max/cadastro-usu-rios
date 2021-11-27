import { Credentials, Prisma } from '@prisma/client';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { hash } from 'bcrypt';

@Injectable()
export class CredentialsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CredentialsCreateInput): Promise<Credentials> {
    const { password, email, user } = data;

    const hashedPassword = await hash(password, 10);

    const userExists = await this.prisma.credentials.findUnique({
      where: {
        email
      }
    })

    if (userExists) {
      throw new HttpException('E-mail not available', HttpStatus.CONFLICT)
    }

    const newUser = this.prisma.credentials.create({
      data: {
        password: hashedPassword,
        email,
        user,
      },
    });

    return newUser;
  }
}
