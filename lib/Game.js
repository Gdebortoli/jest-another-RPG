const inquirer = require('inquirer'); 
const Enemy = require('./Enemy'); 
const Player = require('./Player');


// Game Constructior -properties - Round Number, Player's Turn, Enemies, Current Enemy, Player 
function Game() {

    this.roundNumber = 0; 

    this.isPlayerTurn = false; 

    this.enemies = [];

    this.currentEnemy; // undefined - Will be assigned during initializeGame()

    this.player; // undefined
}
// Methods:
// Initialize Game - Data for the batttle

Game.prototype.initializeGame = function() {
// Initializing Enemy data 
    this.enemies.push(new Enemy('goblin', 'sword')); 

    this.enemies.push(new Enemy('orc', 'baseball bat')); 

    this.enemies.push(new Enemy('skeleton', 'axe')); 

    this.currentEnemy = this.enemies[0]; // So we know which enemy object is fighting the player

// Prompts for Player

    inquirer
        .prompt({
            type: 'text', 
            name: 'name',
            message: 'What is your name?'
        })
    // Destructure name from the prompt object 
        .then(({ name }) => {
            this.player = new Player(name);

        // test the object creation

        console.log(this.startNewBattle, this.player);
        });

}; 

// Start a new battle before each enemy confrontation

Game.prototype.startNewBattle = function() {

}; 

// Battle - where enemies and players can attack each other

Game.prototype.battle = function() {

}; 

// Check end of battle - method to frequently check for win/lose conditions

Game.prototype.checkEndOfBattle = function() {

}; 

module.exports = Game; 