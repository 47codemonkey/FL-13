'use strict'

const loginValidation = prompt('Input valid login');
const LOGINLENGTH = 4;
const USERLOGIN = 'User';
const ADMINLOGIN = 'Admin';
const cancel = null;
const emptyString = '';
const currentDateAndHours = new Date().getHours();
const eightAM = 8;
const eightPM = 20;
const passwords = {
    'User': 'UserPass',
    'Admin': 'RootPass'
};


if (loginValidation === cancel || loginValidation === emptyString) {
    alert('Canceled')
} else if (loginValidation.length < LOGINLENGTH) {
    alert('I don’t know any users having name length less than 4 symbols')
} else if (loginValidation !== USERLOGIN && loginValidation !== ADMINLOGIN) {
    alert('I don’t know you')
} else {
    const password = prompt('Input the password')
    if (password === cancel || password === emptyString) {
        alert('Canceled')
    } else if (password !== passwords[loginValidation]) {
        alert('Wrong password')
    } else {
        currentDateAndHours < eightPM && currentDateAndHours >= eightAM ? alert('Good day, dear ' + loginValidation) :
            alert('Good evening, dear ' + loginValidation);
    }

}