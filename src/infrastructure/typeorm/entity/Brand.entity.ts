import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  // Relations
  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];

  // Timestamps
  @Column('time with time zone', { default: () => 'now()' })
  createdAt!: string;
}
