import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

export interface IProductRepository {
  // Query
  getAll(): Promise<Product[]>;

  // Mutation
}
