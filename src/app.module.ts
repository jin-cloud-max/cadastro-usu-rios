import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { CredentialsModule } from './credentials/credentials.module';

@Module({
  imports: [UsersModule, CredentialsModule],

})
export class AppModule {}
