import { Inject, Injectable } from '@nestjs/common';

// ** Dtos
import { Brand } from '@/infrastructure/typeorm/entity/Brand.entity';

// ** Repositories
import { IBrandRepository } from '@/domain/repository/product/IBrand.repository';

// ** Services
import { IBrandService } from '@/domain/service/product/IBrand.service';

// ** Symbols
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';

@Injectable()
export class BrandService implements IBrandService {
  constructor(
    @Inject(ProductSymbols.IBrandRepository)
    private readonly brandRepo: IBrandRepository,
  ) {}

  // Query
  async getAll(): Promise<Brand[]> {
    return await this.brandRepo.getAll();
  }

  // Mutation
}
