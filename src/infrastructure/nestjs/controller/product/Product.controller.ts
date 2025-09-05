import { Controller, Get, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
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

@Controller('product')
@ApiTags('Product')
@ApiSecurity('x-api-key')
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
  type: 'Unauthorized',
})
// @UseGuards(AuthGuard('api-key'))
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
  @Get('all')
  async getAccounts(): Promise<Product[]> {
    return await this.productService.getAll();
  }
}
