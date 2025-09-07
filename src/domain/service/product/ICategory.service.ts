import { GetAllWithProductsCountResDto } from '@/domain/dto/product/Category.dto';

export interface ICategoryService {
  // Query
  getAllWithProductsCount(): Promise<GetAllWithProductsCountResDto[]>;

  // Mutation
}
