import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() gameData: { game: string; genre_id: number }) {
    const { game, genre_id } = gameData;

    return this.gamesService.create({
      game,
      genres: {
        connect: { id: genre_id },
      },
    });
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
  //   return this.gamesService.update(+id, updateGameDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
