// Requiring the Potion constructor
const Potion = require('../lib/Potion');
// Constructor Function for Enemy
function Enemy(name = '') {
    this.name = name; 

    this.health = Math.floor(Math.random() * 10 + 95); 
    this.strength = Math.floor(Math.random() * 5 + 7); 
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.potion = Math.floor(Math.random() * 0);
    this.weapon = Math.floor(Math.random() * 0);
//
    Enemy.prototype.getDescription = function() {

    }; 
//
    Enemy.prototype.getHealth = function() {

    }; 
//
    Enemy.prototype.getAttackValue = function() {

    }; 
//
    Enemy.prototype.isAlive = function() {

    }; 
//
    Enemy.prototype.reduceHealth = function() {

    }; 
}

module.exports = Enemy;