import {MigrationInterface, QueryRunner} from "typeorm";

export class init1581959444561 implements MigrationInterface {
    name = 'init1581959444561'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "we" nvarchar(255)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "we"`, undefined);
    }

}
