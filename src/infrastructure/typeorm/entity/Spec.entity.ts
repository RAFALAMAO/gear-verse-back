import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product.entity';

@Entity()
export class Spec {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  label: string;

  @Column('text')
  value: string;

  // Relations
  @ManyToOne(() => Product, (product) => product.specs)
  product: Product;

  // Timestamps
  @Column('time with time zone', { name: 'created_at', default: () => 'now()' })
  createdAt!: string;

  @Column('time with time zone', { name: 'updated_at', default: () => 'now()' })
  updatedAt: string;
}
