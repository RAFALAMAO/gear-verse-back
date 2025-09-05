import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  // Relations
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  // Timestamps
  @Column('time with time zone', { default: () => 'now()' })
  createdAt!: string;
}
