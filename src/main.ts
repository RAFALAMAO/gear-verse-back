import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

// ** Config
import config from './config';

// ** Modules
import { AppModule } from './app.module';

// ** Guards
import { ApiKeyGuard } from './infrastructure/nestjs/guards/ApiKey.guard';

// ** Interceptors
import { ErrorsInterceptor } from './interceptors/errors.interceptors';

// ** Services
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);

  // ** Config
  app.enableCors(appService.getCorsOptions());
  app.use(json({ limit: '10mb' }));
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(config().app.globalPrefix);
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.useGlobalGuards(new ApiKeyGuard(new Reflector()));

  // ** Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Zona Gaming API')
    .setVersion('1.0')
    .setDescription(
      `Zona Gaming API Documentation: This documentation provides instructions on making requests to the Zona Gaming API.`,
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(config().app.swaggerUrl, app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      tagsSorter: 'alpha',
      operationsSorter: 'method',
      syntaxHighlight: {
        theme: 'arta',
      },
    },
    customSiteTitle: 'Zona Gaming API - Documentation',
  });

  // ** Start
  await app.listen(config().app.port ?? 3000);
}

bootstrap()
  .then(() => {
    console.log(
      'Listening on: http://localhost:' + config().app.port + '/' + config().app.globalPrefix,
    );
    console.log('Swagger: http://localhost:' + config().app.port + '/' + config().app.swaggerUrl);
    console.log('Server started successfully 🎸');
    if (config().app.env === 'prod') {
      console.log('\x1b[31m\n!!!!! PRODUCTION MODE !!!!! \x1b[0m');
    } else {
      console.log('\x1b[34m\n..::DEV MODE::.. \x1b[0m');
    }
  })
  .catch((e) => {
    console.log('Server failed to start');
    console.log(e);
  });
