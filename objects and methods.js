https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06


const pen = {
    color: 'blue',
    brand: 'bic',
    type: 'ballpoint'
};

/* The above code defines a variable named pen whose value is an object: 
you can therefore say pen is an objectPen is an object in this instanceof. 
It has 3 properties and each property has value.
Each property is a key/value pair. This is called an object literal. */


//Adding Method to object
const aurora = {
    name: 'Aurora',
    strength: 36,
    life: 2
};

function describe (character) {
    return `${character.name} has ${character.strength} strength and ${character.life} life`
};

describe (aurora)

//alternatively

const aurora = {
    name: 'Aurora',
    strength: 36,
    life: 2,

    describe () {
        return `${this.name} has ${this.strength} strength and ${this.life} life`
    }
};
console.log(aurora.describe());


//Exercise

const aurora = {
    name: 'Aurora',
    strength: 36,
    life: 2,
    xp: 0,

    describe() {
        return `${this.name} has ${this.strength} as strength and ${this.life} life and ${this.xp} xp points`
    }

};
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe());

//Exercise 2
//Complete the following program to add the dog object definition.

// TODO: create the dog object here.  
// Answer
const dog = {
    species: 'boardhound',
    name: 'Fang',
    size: '75"',
  
    bark() {
    return "Grrr! Grrr!"
  }
    
  }
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

//given output before writing code
//Fang is a boardhound dog measuring 75"
//Look, a cat! Fang barks: Grrr! Grrr!

//Exercise 3
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
    circumference(){
    return 2 * 3.142 * r},
    area(){
    return 3.142 * r**2}
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


//Exercise 4
/* Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description. */

const bankAccount = {
    name: 'Alex',
    balance: 0,
    describe(){
       return `Owner: ${this.name}, balance: ${this.balance}`
    }
};
console.log ( bankAccount.describe());
this.balance += 250;
this.balance -= 80;

console.log ( bankAccount.describe());
// object-oriented programming

//solving it using procedural programming
const bankAccount = {
    name: 'Alex',
    balance: 0
}
function describe() {
    return `Owner: ${bankAccount.name}, balance: ${bankAccount.balance}`
};

console.log (describe(bankAccount))

bankAccount.balance += 250;
bankAccount.balance -= 80;

describe(bankAccount);





