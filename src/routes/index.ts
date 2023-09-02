import express from 'express';
import { ProductsUsecase } from 'src/services/products/usecase';
import { UserUsecase } from 'src/services/users/usecase';

// ルーティング設定
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

// Products ルーティング設定
Router.get('/products', (_, res, next) => {
  const service = new ProductsUsecase();
  service
    .fetchAll()
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
Router.get('/products/:product_id', (req, res, next) => {
  const productId = req.params.product_id;
  const service = new ProductsUsecase();
  service
    .fetchById(productId)
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
