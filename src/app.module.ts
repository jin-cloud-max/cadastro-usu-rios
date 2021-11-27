import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CredentialsModule } from './credentials/credentials.module';
import { GamesModule } from './games/games.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [UsersModule, CredentialsModule, GamesModule, GenresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
