import { TarefaController } from '../controllers/tarefa.controller';
import { TarefaService } from './../service/tarefa.service';
import { Tarefa } from './../entities/tarefa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    //SERVIÇOS 
    providers: [TarefaService], 
    controllers: [TarefaController], 
    exports: [TypeOrmModule]
})
export class TarefaModule{}