import { TarefaModule } from './tarefa/modules/tarefa.module';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MMJ210491',
      database: 'db_todo',
      entities: [Tarefa],
      synchronize: true
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
