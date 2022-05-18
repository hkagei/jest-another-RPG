const Potion = require('../lib/Potion');

function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;

Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };

  Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
};