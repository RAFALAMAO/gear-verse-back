import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

export interface IProductService {
  // Query
  getAll(): Promise<Product[]>;

  // Mutation
}
