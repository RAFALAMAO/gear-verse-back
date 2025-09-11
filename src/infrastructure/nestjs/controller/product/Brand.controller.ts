import { Controller, Get, Inject, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

// ** Services
import { IBrandService } from '@/domain/service/product/IBrand.service';

// ** Dtos
import { Brand } from '@/infrastructure/typeorm/entity/Brand.entity';

// ** Symbols
import { ProductSymbols } from '@/infrastructure/nestjs/module/product/symbols';

@Controller('brand')
@ApiTags('Brand')
@ApiSecurity('x-api-key')
@ApiUnauthorizedResponse({
  description: 'Unauthorized',
  type: 'Unauthorized',
})
@UsePipes(new ValidationPipe())
export class BrandController {
  constructor(
    @Inject(ProductSymbols.IBrandService)
    private readonly brnadService: IBrandService,
  ) {}

  @ApiOperation({
    summary: 'Get all brands in the database',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('get-all')
  async getAll(): Promise<Brand[]> {
    return await this.brnadService.getAll();
  }
}
