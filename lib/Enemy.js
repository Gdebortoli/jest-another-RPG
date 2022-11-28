// ES6 Syntax
const Potion = require('../lib/Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
// call parent constructor here:
    super(name);
    this.weapon = weapon; 
    this.potion = new Potion();
    }

getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
};

module.exports = Enemy;

// ES5 - old way 
// Constructor Function for Enemy
// function Enemy(name, weapon) {
//     this.name = name; 
//     this.weapon = weapon; 
//     this.potion = new Potion();


//     this.health = Math.floor(Math.random() * 10 + 85); 
//     this.strength = Math.floor(Math.random() * 5 + 5); 
//     this.agility = Math.floor(Math.random() * 5 + 5);
// }
// Inherits prototype methods from Character here: 
// Enemy.prototype = Object.create(Character.prototype); 

// Method(s):
// Gets the Player a description of the enemy
    // Enemy.prototype.getDescription = function () {
    //     return `A ${this.name} holding a ${this.weapon} has appeared!`;
    // };


