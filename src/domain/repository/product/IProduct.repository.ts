// ** Dtos
import { FindByFiltersPagDataDto, FindByFiltersPagResDto } from '@/domain/dto/product/Product.dto';

// ** Entities
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

export interface IProductRepository {
  // Query
  getAll(): Promise<Product[]>;
  countAll(): Promise<number>;
  findBySearch(search: string): Promise<Product[]>;
  getLatest(limit: number): Promise<Product[]>;
  getById(id: number): Promise<Product | null>;
  findByFiltersPag(data: FindByFiltersPagDataDto): Promise<FindByFiltersPagResDto>;

  // Mutation
}
