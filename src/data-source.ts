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
  entities: ['src/entities/*.ts'],
  migrations: ['src/db/migrations/*.ts'],
  subscribers: [],
});
