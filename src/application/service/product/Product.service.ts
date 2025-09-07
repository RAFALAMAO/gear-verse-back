import { FindByFiltersPagDataDto, FindByFiltersPagResDto } from '@/domain/dto/product/Product.dto';
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

  async countAll(): Promise<number> {
    return await this.productRepo.countAll();
  }

  async findBySearch(search: string): Promise<Product[]> {
    return await this.productRepo.findBySearch(search);
  }

  async getLatest(limit: number): Promise<Product[]> {
    return await this.productRepo.getLatest(limit);
  }

  async getById(id: number): Promise<Product | null> {
    return await this.productRepo.getById(id);
  }

  async findByFiltersPag(data: FindByFiltersPagDataDto): Promise<FindByFiltersPagResDto> {
    return await this.productRepo.findByFiltersPag(data);
  }

  // Mutation
}
