import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', width: 10 })
  productId: string;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column({ nullable: true, type: 'varchar', width: 10 })
  setId: string;
}
