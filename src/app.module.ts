import { MiddlewareConsumer, Module } from '@nestjs/common';

// ** Config
import config from '@/config';

// ** Modules
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from './infrastructure/nestjs/module/database/database.module';
import { ProductModule } from './infrastructure/nestjs/module/product/product.module';

// ** Services
import { AppService } from './app.service';

// ** Controllers
import { AppController } from './app.controller';

// ** Middlewares
import { LoggerMiddleware } from './middlewares/log/logger.middleware';

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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
