import { Credentials, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class CredentialsService {
   constructor(private prisma: PrismaService) {}

   async create(data: Prisma.CredentialsCreateInput): Promise<Credentials> {
      return this.prisma.credentials.create({
         data
      })
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
