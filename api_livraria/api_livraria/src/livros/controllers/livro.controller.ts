
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "../entities/livro.entity";
import { LivroService } from "../services/livro.service";


@Controller('livros')
export class LivroController{

    constructor(private livroService: LivroService){

    }

    @Get()
    obterTodos(): Livro[]{
        return this.livroService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livro{
        return this.livroService.obterUm(params.id);
    }

    @Post()
    criar(@Body() newLivro: Livro){
        return this.livroService.criar(newLivro);
    }


    @Put()
    atualizarProduto(@Body() livro: Livro): Livro{ 
        return this.livroService.alterar(livro);
    }

    @Delete(':id')
    apagar(@Param() params){
        return this.livroService.apagar(params.id);
        
    }
}