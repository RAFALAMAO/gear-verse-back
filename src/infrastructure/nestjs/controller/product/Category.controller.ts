import { Controller, Get, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

// ** Services
import { ICategoryService } from '@/domain/service/product/ICategory.service';

// ** Dtos
import { GetAllWithProductsCountResDto } from '@/domain/dto/product/Category.dto';

// ** Symbols
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';

@Controller('category')
@ApiTags('Category')
@ApiSecurity('x-api-key')
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
  type: 'Unauthorized',
})
@UsePipes(new ValidationPipe())
export class CategoryController {
  constructor(
    @Inject(ProductSymbols.ICategoryService)
    private readonly categoryService: ICategoryService,
  ) {}

  @ApiOperation({
    summary: 'Get all categories with products count',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('all-with-products-count')
  async getAllWithProductsCount(): Promise<GetAllWithProductsCountResDto[]> {
    return await this.categoryService.getAllWithProductsCount();
  }
}
