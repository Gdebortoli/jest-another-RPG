function Character() {}
// Checking if character is alive based of health value
Character.prototype.isAlive = function() {
    if (this.health === 0) {
        return false; 
    }
    return true;
};
// Getting Character's health value
Character.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
}; 
// Retrieve Players attack value - using range instead of a specific number
Character.prototype.getAttackValue = function() {
    const min = this.strength - 5; 
    const max = this.strength + 5; 

    return Math.floor(Math.random() * (max - min) + min);
}; 
// Making sure health is not below 0 after an attack and returns remaining value
Character.prototype.reduceHealth = function(health) {
    this.health -= health; 
   
    if (this.health < 0) {
    this.health = 0;
    }
}; 

console.log(new Character().getHealth());

module.exports = Character;