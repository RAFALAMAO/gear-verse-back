import { Category } from '@/infrastructure/typeorm/entity/Category.entity';

export interface ICategoryRepository {
  // Query
  getAllWithProducts(): Promise<Category[]>;

  // Mutation
}
