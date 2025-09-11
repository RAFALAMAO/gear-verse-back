import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// ** Interfaces
import { Brand } from '../../entity/Brand.entity';

// ** Entities
import { IBrandRepository } from '@/domain/repository/product/IBrand.repository';

@Injectable()
export class BrandRepository implements IBrandRepository {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRep: Repository<Brand>,
  ) {}

  // Query
  async getAll(): Promise<Brand[]> {
    return await this.brandRep.find({
      select: {
        id: true,
        name: true,
      },
      order: { name: 'ASC' },
    });
  }

  // Mutation
}
