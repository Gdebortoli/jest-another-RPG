const Player = require('../lib/Player');

// Potion Mock Test (Imports Potion constructor - establishing it as a usable variable)
const Potion = require('../lib/Potion');
// Replaces constructor's implementation with our faked data
jest.mock('../lib/Potion');

// Test 1
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
test('gets inventpry from player or returns false', () => {
  const player = new Player('Dave'); 

  expect(player.getInventory()).toEqual(expect.any(Array)); 

  player.inventory = []; 

  expect(player.getInventory()).toEqual(false);
})