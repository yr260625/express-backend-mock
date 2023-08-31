"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var express_1 = require("express");
var router_1 = require("src/services/users/router");
// All ルーティング設定
exports.Router = express_1.default.Router();
exports.Router.use('/api', router_1.UserRouter);
exports.Router.use(function (_, res) {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found',
        },
    });
});
