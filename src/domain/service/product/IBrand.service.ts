import { Brand } from '@/infrastructure/typeorm/entity/Brand.entity';

export interface IBrandService {
  // Query
  getAll(): Promise<Brand[]>;

  // Mutation
}
