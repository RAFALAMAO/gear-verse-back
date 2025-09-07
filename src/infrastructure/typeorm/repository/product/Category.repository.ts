import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// ** Interfaces
import { ICategoryRepository } from '@/domain/repository/product/ICategory.repository';

// ** Entities
import { Category } from '../../entity/Category.entity';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRep: Repository<Category>,
  ) {}

  // Query
  async getAllWithProducts(): Promise<Category[]> {
    return await this.categoryRep.find({
      relations: {
        products: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        products: {
          id: true,
          name: true,
          available: true,
        },
      },
    });
  }

  // Mutation
}
