import { IProductRepository } from '@/domain/repository/product/IProduct.repository';
import { IProductService } from '@/domain/service/product/IProduct.service';
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';
import { ProductSymbols } from '@/module/product/symbols';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    @Inject(ProductSymbols.IProductRepository)
    private readonly productRepo: IProductRepository,
  ) {}

  // Query
  async getAll(): Promise<Product[]> {
    return await this.productRepo.getAll();
  }

  // Mutation
}
