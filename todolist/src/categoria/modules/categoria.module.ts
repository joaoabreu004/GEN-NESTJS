import { CategoriaContoller } from './../controllers/categoria.controller';
// import { CategoriaService } from './../entities/services/categoria.service';
import { Categoria } from './../entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from "@nestjs/common";
import { CategoriaService } from '../services/categoria.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService], 
    controllers: [CategoriaContoller], 
    exports: [TypeOrmModule]
})
export class CategoriaModule {}