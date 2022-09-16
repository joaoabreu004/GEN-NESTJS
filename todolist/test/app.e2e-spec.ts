import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let id: number;


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'MMJ210491',
          database: 'db_todo_test',
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
          dropSchema: true
        }),
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  // TESTANDO UM CREATE NA TAREFA
  it('1 - INSERINDO UMA TAREFA NO MEU BANCO', async () => {
    let response = await request(app.getHttpServer())
      .post('/tarefa')
      .send({
        nome: 'Curso NestJs',
        descricao: 'Minha primeira tarefa',
        responsavel: 'João',
        data: '2022-09-16',
        status: true
      })
      .expect(201)
    id = response.body.id;
  })


  // TESTE PARA VERFICAR SE CONSEGUIMOS RECUPERAR UM TAREFA ESPECÍFICA
  it('2 - DEVE RECUPERAR UMA TAREFA ESPECÍFICA', async () => {
    return request(app.getHttpServer())
      .get(`/tarefa/${id}`)
      .expect(200)
  })


  // TESTE UPDATE TABELA
  it('3 - DEVE SE ATUALIZAR ALGUM ITEM EXISTENSTE NA TABELA', async () => {
    return request(app.getHttpServer())
      .put('/tarefa')
      .send({
        id: 1,
        nome: 'Curso NestJs - ALURA',
        descricao: 'Minha primeira tarefa',
        responsavel: 'João',
        data: '2022-09-16',
        status: true
      })
      .expect(200)
      .then(response => {
        expect('Curso NestJs - ALURA').toEqual(response.body.nome)
      })
  })



  // ERRO NOT_FOUND 404
  it('4 - NÃO DEVERÁ RETORNAR UMA TAREFA QUE NÃO ESTÁ REGISTRADA', async () => {
    return request(app.getHttpServer())
      .put('/tarefa')
      .send({
        id: 1000,
        nome: 'Curso NestJs - ALURA',
        descricao: 'Minha primeira tarefa',
        responsavel: 'João',
        data: '2022-09-17',
        status: true
      })
      .expect(404)
  })

  // DELETE OK? 
  it('5 - DELETAR UMA TAREFA DO BANCO', async () => {
    return request(app.getHttpServer())
      .delete(`/tarefa/${id}`)
      .expect(204)
  })

  // PARAR DE EXECUTAR OS TESTES
  afterAll(async () => {
    await app.close();
  })


});

