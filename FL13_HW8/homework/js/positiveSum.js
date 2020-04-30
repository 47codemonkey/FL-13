'use strict'

function positiveSum(array) {

    const sum = array.filter(number => number > 0).reduce((number, acc) => number + acc, 0)
    return sum
    // or
    // return array.filter(number => number > 0).reduce((number, acc) => number + acc, 0)
}

positiveSum([2, 4, 6, 8])
positiveSum([0, -3, 5, 7])