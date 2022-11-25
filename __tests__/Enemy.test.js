const Enemy = require("../lib/Enemy");
const Potion = require('../lib/Potion');


jest.mock('../lib/Potion');

// Test 1 - Create Enemy Object with correct properties

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
  });


  // Test 2 - Gets info about enemys health value - looks for joined strings
test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword'); 
  
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
  }); 
  
  // Test 3 - Check if enemy is alive and checks if its true or false 
  
  test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.isAlive()).toBeTruthy();
  
    enemy.health = 0; 
  
    expect(enemy.isAlive()).toBeFalsy();
  });
  
  // Test 4 - To see if correct amount of health is being subtracted 
  // from enemy health 
  
  test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;
  
    enemy.reduceHealth(5);
  
    expect(enemy.health).toBe(oldHealth - 5);
  
    enemy.reduceHealth(99999);
  
    expect(enemy.health).toBe(0);
  });

  // Test 5 - Gets attack value - verify's attack value is in range

test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;
  
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
  });

  // Test 6 - Gets player descripttion of enemy and weapom

  test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
  });