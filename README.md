# express-backend-mock

テスト用API

## Setup

```bash
# install
npm install

# Compiles <!--and hot-reloads for development-->
npx ts-node src/app.ts

# Compiles and minifies for production

```

## Migration

```bash
# create migration file
npm run typeorm migration:generate -- --dataSource src/data-source.ts --pretty src/db/migrations/InitialSchema

# create empty migration file
npm run typeorm migration:create -- src/db/migrations/

# execute migration
npm run typeorm migration:run -- --dataSource src/data-source.ts

```
