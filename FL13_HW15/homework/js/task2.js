'use strict'

function Vehicle(color, engine) {

        this.color = color;
        this.engine = engine;
        this.maxspeed = 70;
        this.currentSpeed = 0;
        this.interval = 2000;
        this.upgradeEngine = function (newEngine, maxSpeed) {
                this.engine = newEngine
                this.maxSpeed = maxSpeed
        }
        this.getInfo = function () {
                console.log(`${this.engine}, ${this.color}, ${this.maxspeed}`)
        }
        this.drive = function () {
                setInterval(() => {
                        this.currentSpeed += 20
                        if(this.currentSpeed > this.maxSpeed) {
                                alert('speed is too high, SLOW DOWN!')
                        }
                }, this.interval)
        }
}

const vehicle = new Vehicle({
        color: 'black',
        engine: 'V6'
})


function Car(model, color, engine) {

        this.model = model;
        this.color = color;
        this.engine = engine;
        this.maxspeed = 80;
        this.currentSpeed = 0;
        this.changeColor = function(newColor) {
                this.color = newColor
        }
        this.upgradeEngine = function (newEngine, maxSpeed) {
                this.engine = newEngine
                this.maxSpeed = maxSpeed
        }
        this.getInfo = function () {
                console.log(`${this.engine}, ${this.color}, ${this.maxspeed}, ${this.model}`)
        }
        this.drive = function () {
                setInterval(() => {
                        this.currentSpeed += 20
                        if(this.currentSpeed > this.maxSpeed) {
                                alert('speed is too high, SLOW DOWN!')
                        }
                }, this.interval)
        }

}


function Motorcycle(model, color, engine) {

        this.model = model;
        this.color = color;
        this.engine = engine;
        this.maxspeed = 90;
        this.currentSpeed = 0;
        this.upgradeEngine = function (newEngine, maxSpeed) {
                this.engine = newEngine
                this.maxSpeed = maxSpeed
        }
        this.getInfo = function () {
                console.log(`${this.engine}, ${this.color}, ${this.maxspeed}, ${this.model}`)
        }
        this.drive = function () {
                setInterval(() => {
                        this.currentSpeed += 20
                        if(this.currentSpeed > this.maxSpeed) {
                                alert('speed is too high, SLOW DOWN!')
                        }
                }, this.interval)
        }
}