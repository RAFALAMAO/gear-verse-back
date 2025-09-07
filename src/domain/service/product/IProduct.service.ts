import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

export interface IProductService {
  // Query
  getAll(): Promise<Product[]>;
  countAll(): Promise<number>;
  findBySearch(search: string): Promise<Product[]>;
  getLatest(limit: number): Promise<Product[]>;
  getById(id: number): Promise<Product | null>;

  // Mutation
}
