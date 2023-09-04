import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { Router } from './routes/';
import { connectDB } from 'src/data-source';

// ライブラリ読み込み
const app = express();
app.use(helmet());
app.use(cors());

// ルーティング設定
app.use('/', Router);

// DB接続
connectDB
  .initialize()
  .then(() => {
    // サーバ起動
    const port = process.env.PORT ?? '3000';
    app.listen(port);
    console.log('listen on port ' + port);
  })
  .catch((error) => {
    console.error(`Data Source initialization error`, error);
  });
