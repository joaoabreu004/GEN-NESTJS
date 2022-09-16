// RESPONSÁVEL POR INDICAR COM A APLICAÇÃO SERÁ INICIALIZADA
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  //CONFIG
  const config = new DocumentBuilder()
    .setTitle('To-do List')
    .setDescription('Projeto realizado em aula realizando o CRUD da minha aplicação')
    .setContact(
      'Generation Brasil', 
      'http://generationbrasil.online/', 
      'jvabreusousa12@gmail.com'
      )
      .setVersion('1.0')
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)



  //AJUSTANDO HORÁRIO:
  process.env.TZ = '-03:00';

  //HABILITAR VALIDATION EM TODAS REQUISIÇÕES HTTP
  app.useGlobalPipes(new ValidationPipe());

  // Permitir que outros domínios consumam nossa API.
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
