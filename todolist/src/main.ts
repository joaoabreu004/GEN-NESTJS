// RESPONSÁVEL POR INDICAR COM A APLICAÇÃO SERÁ INICIALIZADA
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //AJUSTANDO HORÁRIO:
  process.env.TZ = '-03:00';

  //HABILITAR VALIDATION EM TODAS REQUISIÇÕES HTTP
  app.useGlobalPipes(new ValidationPipe());

  // Permitir que outors domínios consumam nossa API.
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
