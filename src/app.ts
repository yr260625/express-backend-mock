import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { Router } from './routes/';
import bodyParser from 'body-parser';

// ライブラリ読み込み
const app = express();
app.use(helmet());
app.use(cors());

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

// ルーティング設定
app.use('/', Router);

// サーバ起動
app.listen(port);
console.log('listen on port ' + port);
