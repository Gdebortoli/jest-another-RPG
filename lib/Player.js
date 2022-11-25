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
// Get Health 
    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    }; 
//
    Player.prototype.isAlive = function() {
        if (this.health === 0) {
            return false;
          }
          return true;
    }; 
// Reduce Health 
    Player.prototype.reduceHealth = function(health) {
        this.health -= health; 
        // Conditional added so health is never in the negative
        if (this.health < 0) {
        this.health = 0;
        }
    }; 
//
    Player.prototype.getAttackValue = function() {

    }; 
//
    Player.prototype.addPotion = function() {

    }; 
//
    Player.prototype.usePotion = function() {

    }; 
}

module.exports = Player; 