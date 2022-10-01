import { Injectable } from "@nestjs/common";
import { Livro } from "../entities/livro.entity";


@Injectable()
export class LivroService{
    livros: Livro[] = [
        new Livro("LIV01", "Livro TDD E BDD na prática", 29.90), 
        new Livro("LIV02", "Livro Kotlin na prática", 79.90), 
        new Livro("LIV01", "Livro Java na prática", 299.90), 
    ]


    //MÉTODO OBTER TODOS 
    obterTodos(): Livro[]{
        return this.livros; 
    }

    obterUm(id: number): Livro{
        return this.livros[0];
    }


    criar(livro: Livro){
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro{
        return livro; 
    }

    apagar(id: number){
        this.livros.pop(); 
    }

}