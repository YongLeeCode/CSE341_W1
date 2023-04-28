// 실제 웹사이트와 연결할 수 있게 하는 라우트 식
const routes = require('express').Router();

const myController = require('../controllers/index.js')
routes.get('/', myController.firstNameFunction);
routes.get('/last', myController.lastNameFunction);
routes.get('/email', myController.emailFunction);
routes.get('/color', myController.colorFunction);
routes.get('/birthday', myController.birthdayFunction);

//다른 파일과 연동할 수 있게하는 식
module.exports = routes;