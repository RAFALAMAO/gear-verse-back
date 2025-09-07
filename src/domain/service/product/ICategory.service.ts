import { getAllWithProductsCountResDto } from '@/domain/dto/product/Category.dto';

export interface ICategoryService {
  // Query
  getAllWithProductsCount(): Promise<getAllWithProductsCountResDto[]>;

  // Mutation
}
