import { LivroService } from './livros/services/livro.service';
import { LivroController } from './livros/controllers/livro.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [LivroController],
  providers: [LivroService],
})
export class AppModule {}
