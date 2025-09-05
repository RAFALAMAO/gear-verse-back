import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @Column('boolean', { default: false })
  isMain: boolean;

  // Relations
  @ManyToOne(() => Product, (product) => product.images)
  product: Product;

  // Timestamps
  @Column('time with time zone', { name: 'created_at', default: () => 'now()' })
  createdAt!: string;

  @Column('time with time zone', { name: 'updated_at', default: () => 'now()' })
  updatedAt: string;
}
