import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';

// ** Interfaces
import { IProductRepository } from '@/domain/repository/product/IProduct.repository';

// ** Dtos
import { FindByFiltersPagDataDto, FindByFiltersPagResDto } from '@/domain/dto/product/Product.dto';

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
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        available: true,
        status: true,
        brand: {
          id: true,
          name: true,
        },
        category: {
          id: true,
          name: true,
        },
        specs: {
          label: true,
          value: true,
        },
        images: {
          id: true,
          url: true,
          isMain: true,
        },
      },
    });
  }

  async countAll(): Promise<number> {
    return await this.productRep.count();
  }

  async findBySearch(search: string): Promise<Product[]> {
    return await this.productRep.find({
      where: [
        { name: ILike(`%${search}%`), available: true },
        { brand: { name: ILike(`%${search}%`) }, available: true },
        { category: { name: ILike(`%${search}%`) }, available: true },
      ],
      relations: {
        brand: true,
        category: true,
        specs: true,
        images: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        available: true,
        status: true,
        brand: {
          id: true,
          name: true,
        },
        category: {
          id: true,
          name: true,
        },
        specs: {
          label: true,
          value: true,
        },
        images: {
          id: true,
          url: true,
          isMain: true,
        },
      },
    });
  }

  async getLatest(limit: number): Promise<Product[]> {
    return await this.productRep.find({
      where: { available: true },
      order: { createdAt: 'DESC' },
      relations: {
        images: true,
      },
      select: {
        id: true,
        name: true,
        price: true,
        available: true,
        status: true,
        createdAt: true,
        images: {
          id: true,
          url: true,
          isMain: true,
        },
      },
      take: limit,
    });
  }

  async getById(id: number): Promise<Product | null> {
    return await this.productRep.findOne({
      where: { id },
      relations: {
        brand: true,
        category: true,
        specs: true,
        images: true,
      },
    });
  }

  async findByFiltersPag(data: FindByFiltersPagDataDto): Promise<FindByFiltersPagResDto> {
    const { search, category, page = 1, limit = 10 } = data;
    const take = +limit;
    const skip = (+page - 1) * limit;

    const where: FindOptionsWhere<Product> = { available: true };

    search && (where.name = ILike(`%${search}%`));
    category && (where.category = { name: ILike(`%${category}%`) });

    const [results, total] = await this.productRep.findAndCount({
      where,
      relations: {
        brand: true,
        category: true,
        specs: true,
        images: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        available: true,
        status: true,
        brand: {
          id: true,
          name: true,
        },
        category: {
          id: true,
          name: true,
        },
        specs: {
          label: true,
          value: true,
        },
        images: {
          id: true,
          url: true,
          isMain: true,
        },
      },
      take,
      skip,
    });

    return {
      items: results,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  // Mutation
}
