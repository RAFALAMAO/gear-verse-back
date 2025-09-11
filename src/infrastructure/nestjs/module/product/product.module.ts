import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// ** Services
import { BrandService } from '@/application/service/product/Brand.service';
import { CategoryService } from '@/application/service/product/Category.service';
import { ProductService } from '@/application/service/product/Product.service';

// ** Controllers
import { ProductController } from '@/infrastructure/nestjs/controller/product/Product.controller';
import { BrandController } from '../../controller/product/Brand.controller';
import { CategoryController } from '../../controller/product/Category.controller';

// ** Repositories
import { BrandRepository } from '@/infrastructure/typeorm/repository/product/Brand.repository';
import { CategoryRepository } from '@/infrastructure/typeorm/repository/product/Category.repository';
import { ProductRepository } from '@/infrastructure/typeorm/repository/product/Product.repository';

// ** Entities
import { Brand } from '@/infrastructure/typeorm/entity/Brand.entity';
import { Category } from '@/infrastructure/typeorm/entity/Category.entity';
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

// ** Symbols
import { ProductSymbols } from './symbols';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand]), ConfigModule],
  providers: [
    {
      provide: ProductSymbols.IProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: ProductSymbols.IProductService,
      useClass: ProductService,
    },
    {
      provide: ProductSymbols.ICategoryRepository,
      useClass: CategoryRepository,
    },
    {
      provide: ProductSymbols.ICategoryService,
      useClass: CategoryService,
    },
    {
      provide: ProductSymbols.IBrandRepository,
      useClass: BrandRepository,
    },
    {
      provide: ProductSymbols.IBrandService,
      useClass: BrandService,
    },
  ],
  controllers: [ProductController, CategoryController, BrandController],
  exports: [ProductModule],
})
export class ProductModule {}
