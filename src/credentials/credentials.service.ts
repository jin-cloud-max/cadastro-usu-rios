import { Credentials, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { hash } from "bcrypt"


@Injectable()
export class CredentialsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CredentialsCreateInput): Promise<Credentials> {
    const { password, email, user } = data

    const hashedPassword = await hash(password, 10)

    const newUser = this.prisma.credentials.create({
      data: {
        password: hashedPassword,
        email,
        user
      }
    })

    return newUser
  }

  findAll() {
    return `This action returns all credentials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credential`;
  }

  // update(id: number, updateCredentialDto: UpdateCredentialDto) {
  //    return `This action updates a #${id} credential`;
  // }

  remove(id: number) {
    return `This action removes a #${id} credential`;
  }
}
