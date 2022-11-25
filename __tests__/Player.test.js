const Player = require('../lib/Player');

// Potion Mock Test (Imports Potion constructor - establishing it as a usable variable)
const Potion = require('../lib/Potion');
// Replaces constructor's implementation with our faked data
jest.mock('../lib/Potion');

// Test 1 - Creates Player 'Dave'
test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
  //Created Player Object to inventory
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  // Test 2 - Checking player.getStatus() and make sure it returns obj w 4 properties
test("gets the player's stats as an object", () => {
  const player = new Player('Dave'); 

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
}); 

  // Test 3 - 
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave'); 

  expect(player.getInventory()).toEqual(expect.any(Array)); 

  player.inventory = []; 

  expect(player.getInventory()).toEqual(false);
})

  // Test 4 - Gets info about players health value - looks for joined strings
test("gets player's health value", () => {
  const player = new Player('Dave'); 

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
}); 

// Test 5 - Check if player is alive and checks if its true or false 

test('checks if player is alive or not', () => {
  const player = new Player('Dave');

  expect(player.isAlive()).toBeTruthy();

  player.health = 0; 

  expect(player.isAlive()).toBeFalsy();
});

// Test 6 - To see if correct amount of health is being subtracted 
// from player health 
// - Called twice to make sure it does not go negavtive 

test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});