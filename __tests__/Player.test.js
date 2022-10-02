const Player = require('../lib/Player')

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});

test('gets player stats as an object', () => {
    const player = new Player('Dave');

    expect(player.getStats().toHaveProperty('potions'));
    expect(player.getStats().toHaveProperty('health'));
    expect(player.getStats().toHaveProperty('strength'));
    expect(player.getStats().toHaveProperty('agility'));
});

test('gets inventory from player of returns false', () => {
    const player = new Player('Dave');
    
    expect(player.getInventory().toEqual(expect.any(Array)))
    player.inventory = [];

    expect(player.getInventory().toEqual(false));
});

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());