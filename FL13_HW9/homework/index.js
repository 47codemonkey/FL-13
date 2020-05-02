'use strict'

function convert() {
    const array = []

    for (let item of arguments) {
        if (typeof item === 'number') {
            array.push(`${item}`)
            //or array.push('' + item)
            //or array.push(String(item))
        } else {
            array.push(+item)
            //or array.push(Number(item))
        }
    }
    return array
}

/////////////////////////////////////////////////////

function executeforEach(arr, fn) {
    for (let el of arr) {
        fn(el)
    }
}

/////////////////////////////////////////////////////

function mapArray(arr, fun) {
    const newArray = []
    executeforEach(arr, function (el) {
        newArray.push(fun(Number(el)))
    })
    return console.log(newArray)
}

/////////////////////////////////////////////////////

function filterArray(arr, func) {
    const newArr = []
    executeforEach(arr, function (el) {
        if (func(el)) {
            newArr.push(el)
        }
    })
    return newArr
}

/////////////////////////////////////////////////////

function containsValue(array, number) {
    let result = false;

    function toCompare(value) {
        if (value === number) {
            result = true;
        }
    }
    executeforEach(array, toCompare);
    return console.log(result);
}

/////////////////////////////////////////////////////

function flipOver(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i -= 1) {
        newString += str[i];
    }
    return newString;
}

flipOver('hey world')

/////////////////////////////////////////////////////

function makeListFromRange(array) {
    let two = array[0]
    let seven = array[1]
    let newArr = []
    for (let i = two; i <= seven; i += 1) {
        newArr.push(i)
    }
    return console.log(newArr)
}

/////////////////////////////////////////////////////

const fruits = [{
        name: 'apple',
        weight: 0.5
    },
    {
        name: 'pineapple',
        weight: 2
    }
];

function getArrayOfKeys (obj, key) {
    let array = []
    executeforEach(obj, el => array.push(el[key]));
    return console.log(array)
}

getArrayOfKeys(fruits, 'name');

/////////////////////////////////////////////////////

const THIRTY = 30;
const TEN = 10;

function substitute(arr) {
    return mapArray(arr, item => item < THIRTY && item > TEN ? '*' : item);
}

/////////////////////////////////////////////////////

function getPastDay(date, day) {
    let newday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return console.log(newday.getDate(newday.setDate(date.getDate() - day)));
  }

/////////////////////////////////////////////////////

function formatDate(date) {
    let newdate = new Date(Date.parse(date));
    return console.log(`${newdate.getFullYear()}/${newdate.getMonth() +
      1}/${newdate.getDate()} ${newdate.getHours()}:${newdate.getMinutes()}`);
  }

formatDate(new Date('6/15/2019 09:15:00'))
formatDate(new Date())

