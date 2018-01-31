// console.log('Lection 12');

// function Parent() {
// }

// Parent.prototype.run = function() {
//     console.log(this.name + " run" + '_');
// }

// Parent.prototype.clear = function() {
//     this.speed = 0;
// }


// function Child() {

// }

// // Child.prototype = new Parent();

// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.eat = function() {
//     console.log(this.name, 'eat');
// }

// var p1 = new Child('Vasya');




function Human(age, weight) {
    var rest = 65;

    this.age = age;
    this.diff = rest - this.age;

    this.getRest = function() {
        return rest;
    }

    this.getWeight = function() {
        console.log(weight);
        return weight;
    }

    this.setWeight = function(value) {
        if(!value || typeof value != 'number'){
            return;
        }

        weight = value;
    }

    this.doGym = function() {
        weight--;
    }
}


var p1 = new Human(26, 70);
// p1.rest = 20;

p1.getWeight();
p1.setWeight(72);
p1.getWeight();

// if (p1.age >= p1.getRest()) {
//     console.log('отдых');
// } else {
//     console.log('work hard');
// }

console.log(Human.prototype.__proto__ === Object.prototype);