'use strict'

function countPointsByScore(x, y) {
    if (x > y) {
        return 3;
    }
    if (x < y) {
        return 0;
    }
    return 1;
}

function countPoints(array) {
    return array.reduce((acc, score) => {
        const indexOfMiddle = score.indexOf(':');
        const points = countPointsByScore(score.slice(0, indexOfMiddle), score.slice(indexOfMiddle + 1, score.length));
        return acc + points;
    }, 0);
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']);