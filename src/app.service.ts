import { Injectable } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getCorsOptions(): CorsOptions {
    const env = this.configService.get<string>('config.app.env');
    const whiteListDev = env === 'dev' ? ['http://localhost:5173', 'http://localhost:4173'] : [];
    const whiteList = [...whiteListDev, 'https://zona-gaming.vercel.app'];

    return {
      origin: function (origin, callback) {
        if (!origin || whiteList.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error('CORS: origen no permitido'), false);
      },
      credentials: true,
    };
  }
}
