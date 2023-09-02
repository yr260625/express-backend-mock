import { MigrationInterface, QueryRunner } from "typeorm";

export class Products1693626199324 implements MigrationInterface {
    name = 'Products1693626199324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "products" (
                "productId" character varying NOT NULL,
                "productName" character varying NOT NULL,
                "price" integer NOT NULL,
                "setId" character varying,
                CONSTRAINT "PK_7b3b507508cd0f86a5b2e923459" PRIMARY KEY ("productId")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "products"
        `);
    }

}
