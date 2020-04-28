'use strict'

const loginValidation = prompt('Input valid login');
const LOGIN_LENGTH = 4;
const USER_LOGIN = 'User';
const ADMIN_LOGIN = 'Admin';
const cancel = null;
const emptyString = '';

if (loginValidation === cancel || loginValidation === emptyString) {
    alert('Canceled')
} else if (loginValidation.length < LOGIN_LENGTH) {
    alert('I don’t know any users having name length less than 4 symbols')
} else if (loginValidation !== USER_LOGIN && loginValidation !== ADMIN_LOGIN) {
    alert('I don’t know you')
} else {
    const password = prompt('Input the password')
    const passwords = {
        'User': 'UserPass',
        'Admin': 'RootPass'
    };
    if (password === cancel || password === emptyString) {
        alert('Canceled')
    } else if (password !== passwords[loginValidation]) {
        alert('Wrong password')
    } else {
        const currentDateAndHours = new Date().getHours();
        const eightAM = 8;
        const eightPM = 20;
        currentDateAndHours < eightPM && currentDateAndHours >= eightAM ? alert(`Good day, dear ${loginValidation}`) :
            alert(`Good evening, dear ${loginValidation}`);
    }
}