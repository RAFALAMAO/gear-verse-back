import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from './Brand.entity';
import { Category } from './Category.entity';
import { ProductImage } from './ProductImage.entity';
import { Spec } from './Spec.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column('float')
  price: number;

  @Column('boolean', { default: true })
  available: boolean;

  @Column('varchar', { default: '10/10', length: 255 })
  status: string;

  // Relations
  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];

  @OneToMany(() => Spec, (spec) => spec.product)
  specs: Spec[];

  // Timestamps
  @Column('time with time zone', { default: () => 'now()' })
  createdAt!: string;

  @Column('time with time zone', { default: () => 'now()' })
  updatedAt: string;
}
