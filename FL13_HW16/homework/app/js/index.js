const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');


// unfortunately, I didn't have time to finish this HM, but I promise, I will.


const _name = document.querySelector('.name-input').value;
const _userName = document.querySelector('.username-input').value;

const body = {_name, _userName}

const request = new XMLHttpRequest()

request.onreadystatechange = function() {
    console.log(this.readyState)
}

const four = 4;
const twoHun = 200;

if(this.readyState === four) {
    console.log(this.status)
} else if(this.status === twoHun) {
    console.log(this.responseText)
}


request.open('GET', baseUrl + '/users')
request.send()


let deleteBtn = document.querySelector('.delete')
for(let item of deleteBtn) {
    item.addEventListener('click', () => {
        console.log('action')
    })
}

