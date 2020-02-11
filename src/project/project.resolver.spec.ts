
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { ProjectModule } from './project.module'
import { INestApplication } from '@nestjs/common';

describe('e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = await moduleFixture.createNestApplication().init();
  });

  it('should fetch projects', async done => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
            projects {
              id
              name
            }
          }`,
      })
      .expect(200, done);
  });

  afterAll(async () => {
    await app.close();
  });
});


//import { GraphQLSchema } from 'graphql';
//import { buildSchema } from 'type-graphql';
//
//import { ProjectResolver } from './project.resolver';
//
//export async function generateSchema(): Promise<GraphQLSchema> {
//  try {
//    const schema = await buildSchema({
//      resolvers: [ProjectResolver],
//      validate: true,
//    });
//
//    return schema;
//  } catch (e) {
//    console.error(e);
//    throw e;
//  }
//}
//
//describe("Project", () => {
//    let schema: GraphQLSchema;
//
//    beforeAll(async () => {
//        schema = await generateSchema();
//    });
//
//    it("should build schema without errors", async () => {
//        expect(schema).toBeDefined();
//    });
//});o
//