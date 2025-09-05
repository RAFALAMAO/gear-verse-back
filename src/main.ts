import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(config().app.globalPrefix);
  await app.listen(config().app.port ?? 3000);
}

bootstrap()
  .then(() => {
    console.log(
      'Listening on: http://localhost:' + config().app.port + '/' + config().app.globalPrefix,
    );
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
