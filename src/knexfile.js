//import knex from 'knex';

const {
  NODE_ENV='development',
  DB_HOST='localhost',
  DB_PORT= 15432,
  DB_DATABASE='postgres',
  DB_USER='postgres',
  DB_PASSWORD='postgres',
} = process.env;

const config = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: parseInt(DB_PORT),
      database: DB_DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: './knex/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './knex/seeds'
    }
  }
}

export default config;
