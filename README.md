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
npm run migration:gen src/db/migrations/InitialSchema

# execute migration
npm run migration:run
```
