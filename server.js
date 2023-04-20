var express = require('express');
var app = express();


//routes 파일과 연결
app.use('/', require('./routes/index'))

//index.js 자료 - server.js에 라우트를 넣었을 때는 cannot get이 뜬다. 이유는?
// const routes = require('express').Router();
// routes.get('/', (req, res, next) => {
//     res.json('Yonghwan Lee');
// });
// module.exports = routes;

app.listen(3210, ()=>{
    console.log("server is running on port 3210")
});