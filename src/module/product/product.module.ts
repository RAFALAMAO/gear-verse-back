import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// ** Services
import { ProductService } from '@/application/service/product/Product.service';

// ** Controllers
import { ProductController } from '@/infrastructure/nestjs/controller/product/Product.controller';

// ** Repositories
import { ProductRepository } from '@/infrastructure/typeorm/repository/product/Product.repository';

// ** Entities
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

// ** Symbols
import { ProductSymbols } from './symbols';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ConfigModule],
  providers: [
    {
      provide: ProductSymbols.IProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: ProductSymbols.IProductService,
      useClass: ProductService,
    },
  ],
  controllers: [ProductController],
  exports: [ProductModule],
})
export class ProductModule {}
