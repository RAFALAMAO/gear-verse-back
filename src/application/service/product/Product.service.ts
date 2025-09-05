import { IProductRepository } from '@/domain/repository/product/IProduct.repository';
import { IProductService } from '@/domain/service/product/IProduct.service';
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';
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
