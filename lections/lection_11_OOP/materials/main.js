console.log('Lection 11');

function Human(name, age, speed) {
    this.name = name;
    this.age = age;
    this.speed = speed;

    // this.run = function() {
    //     console.log(this.name + " run" + '_' + this.speed);
    // }
}

// Human.prototype.foo = 200;
Human.prototype.run = function() {
    console.log(this.name + " run" + '_' + this.speed);
}

Human.prototype.clear = function() {
    this.speed = 0;
}

console.dir(Human);

var p1 = new Human('Vasya', 23, 25);
var p2 = new Human('Petya', 65, 10);

p1.run();




function Dog(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}

function Owner(name) {
    this.name = name;
}

Owner.prototype.buy = function(dog) {
    dog.owner = this.name;
}


var dog1 = new Dog('Sharik', 2, 'Vasya');
var dog2 = new Dog('Bony', 3, 'Sava');

var owner1 = new Owner('Petya');


owner1.buy(dog2);


