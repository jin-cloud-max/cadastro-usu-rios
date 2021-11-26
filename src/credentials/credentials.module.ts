import { Module } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialsController } from './credentials.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CredentialsController],
  providers: [CredentialsService, PrismaService]
})
export class CredentialsModule {}
