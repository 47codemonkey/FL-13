'use strict'

const countSumAndTip = () => {
    const odd = -1;
    const hundredPercent = 100;
    const checkNumber = prompt('please, input number', '0')
    if (checkNumber <= odd || isNaN(checkNumber) || checkNumber === null) {
        alert('Invalid input data')
        return;
    }
    const tip = prompt('please input tip number')
    if (tip > hundredPercent || tip <= odd || isNaN(tip) || tip === null) {
        alert('Invalid input data')
        return;
    }
    const tipAmount = checkNumber / hundredPercent * tip;
    const totalSumToPay = Number(checkNumber) + Number(tipAmount)
    const fixedNumber = 2;
    alert(`
        Check number: ${checkNumber}$
        Tip: ${tip}%
        Tip amount: ${tipAmount.toFixed(fixedNumber)}$
        Total sum to pay: ${totalSumToPay.toFixed(fixedNumber)}$
        `)
}

countSumAndTip()