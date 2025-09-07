import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProductAvalibleStatus1757227036619 implements MigrationInterface {
    name = 'AddProductAvalibleStatus1757227036619'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "available" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "product" ADD "status" character varying(255) NOT NULL DEFAULT '10/10'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "available"`);
    }

}
