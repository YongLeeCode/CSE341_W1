const firstNameFunction = (req, res, next) => {
    res.json('Yonghwan');
};

const lastNameFunction = (req, res, next) => {
    res.json('Lee');
};

const emailFunction = (req, res, next) => {
    res.json('yonghwan311@gmail.com');
};

const colorFunction = (req, res, next) => {
    res.json('Green');
};

const birthdayFunction = (req, res, next) => {
    res.json('March 11, 1996');
};

//여러개를 export할 때는 괄호
module.exports = {firstNameFunction, lastNameFunction, emailFunction, colorFunction, birthdayFunction};