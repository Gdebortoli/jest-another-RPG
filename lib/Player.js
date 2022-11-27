const Potion = require('../lib/Potion');
const Character = require('./Character');

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
// Methods: 
// returns the inventory (potion objects) array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false; 
    };
// Adding a Potion to inventory 
    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
    }; 
// Potion Inventory
    Player.prototype.usePotion = function(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break; 
            case 'health':
                this.health += potion.value; 
                break;
            case 'strength':
                this.strength += potion.value; 
                break;
        } // OG inventory array has 1 potion removed at index value and is put into a new removed items array
        // potion at index [0] of this new removed array is saved in a potion variable
    }; 
}

module.exports = Player; 