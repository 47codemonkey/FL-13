'use strict'


// As an option smth like that:

// Object.keys(obj).forEach(key => { 
//     result[key] = obj[key]
//     }
// )


// But I prefer to use code below


function Assign(paramOne, paramTwo) {
    this.paramOne = paramOne;
    this.paramTwo = paramTwo;

    // const result = {
    //     ...this.paramOne;
    //     ...this.paramTwo
    // }

    const result = Object.assign({}, this.paramOne, this.paramTwo)

    console.log(result)
}    

const assign = new Assign({cash: '100$'}, {creditLimit: '50$',paymentCard: '200$'})



