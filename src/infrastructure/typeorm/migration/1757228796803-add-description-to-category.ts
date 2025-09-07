import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionToCategory1757228796803 implements MigrationInterface {
    name = 'AddDescriptionToCategory1757228796803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
    }

}
