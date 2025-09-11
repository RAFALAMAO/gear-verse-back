import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

export class FindByFiltersPagDataDto {
  search: string;
  category: string;
  brand: string;
  page: number;
  limit: number;
}

export class FindByFiltersPagResDto {
  items: Product[];
  total: number;
  page: number;
  totalPages: number;
}
