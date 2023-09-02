import express from 'express';
import { UserUsecase } from 'src/services/users/usecase';

// All ルーティング設定
export const Router = express.Router();

// Users ルーティング設定
Router.get('/users', (_, res, next) => {
  const service = new UserUsecase();
  service
    .fetchAll()
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
Router.get('/users/:user_id', (req, res, next) => {
  const userId = req.params.user_id;
  const service = new UserUsecase();
  service
    .fetchById(Number(userId))
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
