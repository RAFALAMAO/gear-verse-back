import { Brand } from '@/infrastructure/typeorm/entity/Brand.entity';

export interface IBrandRepository {
  // Query
  getAll(): Promise<Brand[]>;

  // Mutation
}
