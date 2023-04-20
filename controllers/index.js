const nameFunction = (req, res, next) => {
    res.json('Yonghwan Lee');
};

const ageFunction = (req, res, next) => {
    res.json('27');
};

//여러개를 export할 때는 괄호
module.exports = {nameFunction, ageFunction};