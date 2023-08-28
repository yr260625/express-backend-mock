import express from 'express';
import { UserRepository } from 'src/services/users/repository';

export const UserRouter = express.Router();

// Users ルーティング設定
UserRouter.get('/users', (_, res, next) => {
  const service = new UserRepository();
  service
    .fetchAll()
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});

UserRouter.get('/users/:user_id', (req, res, next) => {
  const user_id = req.params.user_id;
  const service = new UserRepository();
  service
    .fetchById(user_id)
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
