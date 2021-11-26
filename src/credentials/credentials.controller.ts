import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}

  @Post('/:id')
  create(@Body() credentialsData: { email: string, password: string }, @Param('id') id: string) {
    const { email, password } = credentialsData
    
    
    return this.credentialsService.create({
      email,
      password,
      user: {
        connect: { id: Number(id) }
      }
    }); 
  }

  @Get()
  findAll() {
    return this.credentialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credentialsService.findOne(+id);
  }

   //   @Patch(':id')
   //   update(@Param('id') id: string, @Body() updateCredentialDto: UpdateCredentialDto) {
   //     return this.credentialsService.update(+id, updateCredentialDto);
   //   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(+id);
  }
}
