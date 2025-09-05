import { Module } from '@nestjs/common';

// ** Config
import config from '@/config';

// ** Modules
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from './module/database/database.module';
import { ProductModule } from './module/product/product.module';

// ** Services
import { AppService } from './app.service';

// ** Controllers
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
      load: [config],
    }),
    TerminusModule,
    DatabaseModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
