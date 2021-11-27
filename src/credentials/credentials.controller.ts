import { Controller, Post, Body, Param } from '@nestjs/common';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post('/:id')
  create(
    @Body() credentialsData: { email: string; password: string },
    @Param('id') id: string,
  ) {
    const { email, password } = credentialsData;

    return this.credentialsService.create({
      email,
      password,
      user: {
        connect: { id: Number(id) },
      },
    });
  }
}
