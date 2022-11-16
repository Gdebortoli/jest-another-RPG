//Constructor Function for Potions [Strenth, Health, Agility]
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
                // above || is to determine if one is a truthy and if the first passed is not then it will pass a random type
    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30); //between 30 and 40
    } else {
        this.value = Math.floor(Math.random() * 5 + 7); //between 7 and 12
    }
}

module.exports = Potion;


