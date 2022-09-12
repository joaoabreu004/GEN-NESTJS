import { Categoria } from './../../categoria/entities/categoria.entity';
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"; 
//ESSA CLASSE VAI REPRESENTAR UMA TABELA NO NOSSO BANCO
@Entity({name: 'tb_tarefa'})
export class Tarefa{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    descricao: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    responsavel: string
 
    @Column()
    data: Date
    
    @Column()
    status: boolean

    @ManyToOne(() => Categoria, (categoria) => categoria.tarefas,{
       //AO EXCLUIR UMA CATEGORIAS TODAS TAREFAS DEVEM SER EXCLUIDAS 
       onDelete: "CASCADE"
    })
    categoria: Categoria
}