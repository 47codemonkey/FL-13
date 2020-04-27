'use strict'

const loginValidation = prompt('Input valid login')
const LOGINLENGTH = 4;
const USERLOGIN = 'User';
const ADMINLOGIN = 'Admin';
const USERPASSWORD = 'UserPass'
const ADMINPASSWORD = 'RootPass'
const cancel = null;
const emptyString = '';
const date = new Date()
const hours = date.getHours()
const exactHour = 20;


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
    } else if (password === USERPASSWORD && loginValidation === USERLOGIN ||
        password === ADMINPASSWORD && loginValidation === ADMINLOGIN) {
        if (hours < exactHour && loginValidation === USERLOGIN) {
            alert('Good day, dear User!')
        } else if (hours < exactHour && loginValidation === ADMINLOGIN) {
            alert('Good day, dear Admin!')
        } else if (hours >= exactHour && loginValidation === USERLOGIN) {
            alert('Good evening, dear User!')
        } else if (hours >= exactHour && loginValidation === ADMINLOGIN) {
            alert('Good evening, dear User!')
        }
    } else {
        alert('Wrong password')
    }
}