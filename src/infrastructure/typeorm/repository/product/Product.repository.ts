import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// ** Interfaces
import { IProductRepository } from '@/domain/repository/product/IProduct.repository';

// ** Entities
import { Product } from '../../entity/Product.entity';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRep: Repository<Product>,
  ) {}

  // Query
  async getAll(): Promise<Product[]> {
    return await this.productRep.find({
      relations: {
        brand: true,
        category: true,
        specs: true,
        images: true,
      },
    });
  }

  // Mutation
}
