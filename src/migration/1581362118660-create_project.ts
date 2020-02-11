import {MigrationInterface, QueryRunner} from "typeorm";

export class createProject1581362118660 implements MigrationInterface {
    name = 'createProject1581362118660'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "project" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "project"`, undefined);
    }

}
