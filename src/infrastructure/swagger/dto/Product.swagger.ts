import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

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

export class ProductGetByFiltersPagQuery {
  @ApiProperty()
  @IsString()
  @IsOptional()
  search: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  category: string;

  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page: number;

  @ApiProperty()
  @IsInt()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit: number;
}
