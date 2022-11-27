const e = require('express');
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

        this.startNewBattle();

        });

}; 

// Start a new battle before each enemy confrontation

Game.prototype.startNewBattle = function() {
    // who will take their turn first based off agility stats
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true; 
    } else {
        this.isPlayerTurn = false;
    }
    // gets stats for player in table format
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    // let you know an enemy has appeared
    console.log(this.currentEnemy.getDescription());

    this.battle(); //responsible for each individual turn in the round
}; 

// Battle - where enemies and players can attack each other - will run an indefinite number of times

Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
        // PLayer Prompts 
        inquirer
            .prompt({
                type: 'list', 
                message: 'What would you like to do?', 
                name: 'action', 
                choices: ['Attack', 'Use potion']
            })
            .then(({ action }) => {
                if (action === 'Use potion') {
                    if (!this.player.getInventory()) {
                        console.log("You don't have any potions!");
                        return; 
                    } 
                    inquirer
                        .prompt({
                            type: 'list', 
                            message: 'Which potion would you like to use?', 
                            name: 'action', 
                            choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                        })
                        .then(({ action }) => {
                          const potionDetails = action.split(': ');
                      
                          this.player.usePotion(potionDetails[0] - 1);
                          console.log(`You used a ${potionDetails[1]} potion.`);
                          this.checkEndOfBattle(); 
                        });
                    
                } else {
                const damage = this.player.getAttackValue();
                this.currentEnemy.reduceHealth(damage);

                console.log(`You attacked the ${this.currentEnemy.name}`);
                console.log(this.currentEnemy.getHealth());

                }  
            });
        }
    }

// Check end of battle - method to frequently check for win/lose conditions

Game.prototype.checkEndOfBattle = function() {

}; 

module.exports = Game;