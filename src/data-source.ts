import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const connectDB = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [String(process.env.DB_ENTITIES_DIR)],
  migrations: [String(process.env.DB_MIGRATION_DIR)],
  subscribers: [String(process.env.DB_SUBSCRIBERS_DIR)],
});
