import express from 'express';
import { UserRouter } from 'src/services/users/router';

// All ルーティング設定
export const Router = express.Router();
Router.use('/api', UserRouter);

Router.use((_, res) => {
  res.status(404);
  res.render('error', {
    param: {
      status: 404,
      message: 'not found',
    },
  });
});
