const Player = require('../lib/Player');

// Potion Mock Test (Imports Potion constructor - establishing it as a usable variable)
const Potion = require('../lib/Potion');
// Replaces constructor's implementation with our faked data
jest.mock('../lib/Potion');

console.log(new Potion());

// Test 1
test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
  //Created Player Object to inventory
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });