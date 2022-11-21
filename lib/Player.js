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
// returns an object with various players properties
    Player.prototype.getStats = function() { 
        return {
            potions: this.inventory.length, 
            health: this.health, 
            strength: this.strength, 
            agility: this.agility
        };
    };
// returns the inventory (potion objects) array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false; 
    };
}

module.exports = Player; 