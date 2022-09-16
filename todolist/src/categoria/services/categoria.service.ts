import { Categoria } from './../entities/categoria.entity';

import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

export class CategoriaService{
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){}

    
    //MÉTODOS 
    async findAll(): Promise<Categoria[]>{
        return this.categoriaRepository.find({
            relations: {
                tarefas: true
            }
        })
    }

    async findById(id: number): Promise<Categoria>{
        let categoria = await this.categoriaRepository.findOne({
            where:{
                id
            }, 
            relations: {
                tarefas: true
            }
        })

        if(!categoria)
            throw new HttpException(`CATEGORIA NÃO ENCONTRADA`, HttpStatus.NOT_FOUND)
        return categoria
    }

    async findByDescricao(descricao: string): Promise<Categoria[]>{
        return this.categoriaRepository.find({
            where: {
                descricao : ILike(`%${descricao}%`)
            }, 
            relations: {
                tarefas: true
            }
        })
    }

    async create(categoria: Categoria) : Promise<Categoria>{
        return this.categoriaRepository.save(categoria)
    }

    async update(categoria: Categoria) : Promise<Categoria>{

        let tarefaUpdate = await this.findById(categoria.id)

        if(!tarefaUpdate || !categoria.id)
            throw new HttpException('CATEGORIA NÃO ENCONTRADA', HttpStatus.NOT_FOUND)
        return this.categoriaRepository.save(categoria)
    }

    async delete(id: number): Promise<DeleteResult>{
        let tarefaDelete = await this.findById(id)
        
        if(!tarefaDelete)
            throw new HttpException('TAREFA NÃO FOI ENCONTRADA', HttpStatus.NOT_FOUND)
        return this.categoriaRepository.delete(id)
    }

}