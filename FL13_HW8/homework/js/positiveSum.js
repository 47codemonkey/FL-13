'use strict'

function positiveSum(array) {

    const summ = array.filter(arr => arr > 0).reduce((arr, acc) => arr + acc, 0)
    return summ
    // or
    // return array.filter(arr => arr > 0).reduce((arr, acc) => arr + acc, 0)
}

positiveSum([2, 4, 6, 8])
positiveSum([0, -3, 5, 7])