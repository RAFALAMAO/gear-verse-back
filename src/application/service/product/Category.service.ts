import { getAllWithProductsCountResDto } from '@/domain/dto/product/Category.dto';
import { ICategoryRepository } from '@/domain/repository/product/ICategory.repository';
import { ICategoryService } from '@/domain/service/product/ICategory.service';
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @Inject(ProductSymbols.ICategoryRepository)
    private readonly categoryRepo: ICategoryRepository,
  ) {}

  // Query
  async getAllWithProductsCount(): Promise<getAllWithProductsCountResDto[]> {
    const categories = await this.categoryRepo.getAllWithProducts();

    if (!categories) {
      return [];
    }

    const result = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        productsCount: category.products.filter((product) => product.available).length,
        description: category.description,
      };
    });

    return result;
  }

  // Mutation
}
