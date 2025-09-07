import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      name: process.env.APP_NAME,
      port: process.env.APP_PORT,
      apiKey: process.env.APP_API_KEY,
      globalPrefix: process.env.APP_GLOBAL_PREFIX,
      env: process.env.NODE_ENV,
      swaggerUrl: process.env.APP_SWAGGER_URL,
    },
    db: {
      type: process.env.DB_TYPE,
      port: parseInt(process.env.DB_PORT) || 5432,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  };
});
