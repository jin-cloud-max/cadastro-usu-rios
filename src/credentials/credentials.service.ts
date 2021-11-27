import { Credentials, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { hash } from 'bcrypt';

@Injectable()
export class CredentialsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CredentialsCreateInput): Promise<Credentials> {
    const { password, email, user } = data;

    const hashedPassword = await hash(password, 10);

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
