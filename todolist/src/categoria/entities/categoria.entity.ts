import { Tarefa } from './../../tarefa/entities/tarefa.entity';
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_categoria')
export class Categoria{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @ApiProperty()
    @Column({nullable: false, length: 255})
    descricao: string
    
    @ApiProperty({type: () => Tarefa})
    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    tarefas: Tarefa[]
} 