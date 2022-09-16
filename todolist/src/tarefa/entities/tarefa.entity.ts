import { Categoria } from './../../categoria/entities/categoria.entity';
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"; 
import { ApiProperty } from '@nestjs/swagger';
//ESSA CLASSE VAI REPRESENTAR UMA TABELA NO NOSSO BANCO
@Entity({name: 'tb_tarefa'})
export class Tarefa{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    @ApiProperty()
    descricao: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    @ApiProperty()
    responsavel: string
 
    @Column()
    @ApiProperty()
    data: Date
    
    @Column()
    @ApiProperty()
    status: boolean


    @ManyToOne(() => Categoria, (categoria) => categoria.tarefas,{
       //AO EXCLUIR UMA CATEGORIAS TODAS TAREFAS DEVEM SER EXCLUIDAS 
       onDelete: "CASCADE"
    })

    @ApiProperty({type: () => Categoria})
    categoria: Categoria
}