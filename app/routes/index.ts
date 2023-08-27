import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { TestService } from '../services/TestService';
const app = express();
app.use(helmet());
app.use(cors());
// ルーティングする
const router = express.Router();

// routerにルーティングの動作を記述する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});

router.get('/test', (req, res, next) => {
    const service = new TestService();
    service
      .test()
      .then(result => res.status(200).send(result))
      .catch(next);
});

// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
    res.status(404);
    res.render('error', {
      param: {
        status: 404,
        message: 'not found'
      },
    });
});

//routerをモジュールとして扱う準備
module.exports = router;
