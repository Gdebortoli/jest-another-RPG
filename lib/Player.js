// Requiring the Potion constructor
const Potion = require('../lib/Potion');
// Constructor Function for Player
function Player(name = '') {
    this.name = name; 

    this.health = Math.floor(Math.random() * 10 + 95); 
    this.strength = Math.floor(Math.random() * 5 + 7); 
    this.agility = Math.floor(Math.random() * 5 + 7);
    // Adding Potion to Inventory
    this.inventory = [new Potion('health'), new Potion()];

}

module.exports = Player; 