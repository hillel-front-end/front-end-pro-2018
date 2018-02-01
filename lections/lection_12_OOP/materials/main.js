// // console.log('Lection 12');

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




// function Human(age, weight) {
//     var rest = 65;

//     this.age = age;
//     this.diff = rest - this.age;

//     this.getRest = function() {
//         return rest;
//     }

//     this.getWeight = function() {
//         console.log(weight);
//         return weight;
//     }

//     this.setWeight = function(value) {
//         if(!value || typeof value != 'number'){
//             return;
//         }

//         weight = value;
//     }

//     this.doGym = function() {
//         weight--;
//     }
// }


// var p1 = new Human(26, 70);
// // p1.rest = 20;

// p1.getWeight();
// p1.setWeight(72);
// p1.getWeight();

// // if (p1.age >= p1.getRest()) {
// //     console.log('отдых');
// // } else {
// //     console.log('work hard');
// // }

// console.log(Human.prototype.__proto__ === Object.prototype);



function Animal() {

}

function Dog() {
    
}

function Labrador(name) {
    this.name = name;
    this.copy = function(flag) {
            if(flag) {
                for(var item in this.__proto__){
                    this[item] = this.__proto__[item];
                }
            } else {
                for(var item in this){
                    if(item === 'copy') {continue;}
                    delete this[item];
                }
            }
        if (this.__proto__ != Object.prototype) {
            console.log(this);
            this.__proto__.copy = this.copy;
            this.__proto__.copy(false);
        } else return;
    }
}

Dog.prototype = Object.create(Animal.prototype);
Labrador.prototype = Object.create(Dog.prototype);

Animal.prototype.eat = function(){ console.log('eat1'); }
Animal.prototype.run = function(){ console.log('run2'); }
Dog.prototype.bark = function(){ console.log('bark3'); }
Labrador.prototype.cute = function(){ console.log('cute4'); }

var p1 = new Labrador('Sharik');

console.log(p1);