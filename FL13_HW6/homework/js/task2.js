'use strict';

const even = 2;

const isItEven = (string) => {
    if (string.length % even === 0) {
        return true;
    } else {
        return false;
    }
};

const validate = (string) => {
    if (typeof string !== 'string' || string.includes(' ') || string.length <= 0) {
        return 'Invalid input';
    }
    return;
};

function task2() {
    const inputWord = prompt('Enter word');
    const validationResult = validate(inputWord);

    if (validationResult) {
        alert(validationResult);
        return;
    }

    if (isItEven(inputWord)) {
        const middleCharIndex = inputWord.length / even;
        alert(`Middle chars are ${inputWord[middleCharIndex - 1]} and ${inputWord[middleCharIndex]}`);
    } else {
        const middleCharIndex = (inputWord.length - 1) / even;
        alert(`Middle char is ${inputWord[middleCharIndex]}`);
    }
}

task2();