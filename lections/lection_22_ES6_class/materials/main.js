console.log('Lection_22');


function Animal() {
    
}

Animal.eat = function() {

}

function Human(name, age) {
    this.name = name;
    this.age = age;

    var _counter = 200;

    this.run = function() {
        console.log(this.name, 'run');

        _counter++;
    }
}

Human.prototype = Object.create(Animal.prototype);

Human.getCount = function() {
    console.log('count: ****');
}

Human.prototype.sleep = function() {
    console.log(this.name, 'sleep');
}

var p1 = new Human('Vasya', 25);

p1.run();
p1.sleep();