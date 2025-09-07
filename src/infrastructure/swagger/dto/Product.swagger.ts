import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class ProductGetBySearchQuery {
  @ApiProperty()
  @IsString()
  search: string;
}

export class ProductGetLatestQuery {
  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  limit: number;
}

export class ProductGetByIdParam {
  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  id: number;
}
