import { Prisma, User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'

@Injectable()
export class UsersService {
   constructor(private prisma: PrismaService) {}

   async create(data: Prisma.UserCreateInput) {
      return this.prisma.user.create({
         data
      })
   }

   async findAll(): Promise<User[]> {

      return this.prisma.user.findMany()
   }

   findOne(id: number) {
      return `This action returns a #${id} user`;
   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

   remove(id: number) {
      return `This action removes a #${id} user`;
   }
}
