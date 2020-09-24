const { JestEnvironment } = require("@jest/environment");
const Player = require("../lib/Player.js");
const Potion = require("../lib/__mocks__/Potion.js");
jest.mock('../lib/potion');
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );

});