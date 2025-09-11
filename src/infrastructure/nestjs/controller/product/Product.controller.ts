import { Controller, Get, Inject, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

// ** Services
import { IProductService } from '@/domain/service/product/IProduct.service';

// ** Entities
import { Product } from '@/infrastructure/typeorm/entity/Product.entity';

// ** Symbols
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';

// ** Swagger Dtos
import {
  ProductGetByFiltersPagQuery,
  ProductGetByIdParam,
  ProductGetBySearchQuery,
  ProductGetLatestQuery,
} from '@/infrastructure/swagger/dto/Product.swagger';

// ** Dtos
import { FindByFiltersPagResDto } from '@/domain/dto/product/Product.dto';

@Controller('product')
@ApiTags('Product')
@ApiSecurity('x-api-key')
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
  type: 'Unauthorized',
})
@UsePipes(new ValidationPipe())
export class ProductController {
  constructor(
    @Inject(ProductSymbols.IProductService)
    private readonly productService: IProductService,
  ) {}

  @ApiOperation({
    summary: 'Get all products from database',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('get-all')
  async getAll(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @ApiOperation({
    summary: 'Count all products from database',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('count-all')
  async countAll(): Promise<number> {
    return await this.productService.countAll();
  }

  @ApiOperation({
    summary: 'Get all products from database by search',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('get-by-search')
  async findBySearch(@Query() query: ProductGetBySearchQuery): Promise<Product[]> {
    return await this.productService.findBySearch(query.search);
  }

  @ApiOperation({
    summary: 'Get certain amount of products from database ordered by creation date',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('get-latest')
  async getLatest(@Query() query: ProductGetLatestQuery): Promise<Product[]> {
    return await this.productService.getLatest(query.limit);
  }

  @ApiOperation({
    summary: 'Get product by id from database',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('get-by-id/:id')
  async getById(@Param() param: ProductGetByIdParam): Promise<Product | null> {
    return await this.productService.getById(param.id);
  }

  @ApiOperation({
    summary: 'Find products by filters and pagination from database',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('find-by-filters-pag')
  async findByFiltersPag(
    @Query() query: ProductGetByFiltersPagQuery,
  ): Promise<FindByFiltersPagResDto> {
    return await this.productService.findByFiltersPag(query);
  }
}
