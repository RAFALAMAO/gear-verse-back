import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/src/infrastructure/typeorm/entity/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/infrastructure/typeorm/migration/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  synchronize: false,
  logging: false,
  autoLoadEntities: true,
  ssl: { rejectUnauthorized: false },
};

export default ormconfig;
