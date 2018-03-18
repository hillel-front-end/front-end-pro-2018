console.log('Lection_24');

var obj = {
    x: 10,
    y: 20
}

// obj.z = 30;

// Object.defineProperty(obj, 'z', {
//     value: 30,
//     writable: true, // false
//     enumerable: true, // false
//     configurable: false, // false
// });



// Object.defineProperty(obj, 'z', {
//     value: ++obj.z,
//     writable: false, // false
//     enumerable: true, // false
//     configurable: true
// });



//---------------------
// Object.defineProperty(obj, 'foo', {
//     value: foo,
//     writable: true, // false
//     enumerable: true, // false
//     configurable: false, // false
// });

// function foo(){
//     console.log(this);

//     return 10;
// }
//---------------------

obj.arr = [1,6,7,2];

Object.defineProperty(obj, 'sum', {
    // value: 200,
    get: function() {
        return this.arr.reduce((prev, curr) => prev + curr, 0)
    },
    set: function(value) {
        this.arr.push(value);
    }
});

var name = 'default';

Object.defineProperty(obj, name, {
    // vaule: 200,
    set: function(value){
        this.x = value;
        this.y = value;
    }
});


// obj.default = 150;

// y = obj.sum + 20;
console.log(obj);



// var user = {
//     firstName: "Вася",
//     surname: "Петров"
//   }
  
//   Object.defineProperty(user, "fullName", {
  
//     get: function() {
//       return this.firstName + ' ' + this.surname;
//     },
  
//     set: function(value) {
//         var split = value.split(' ');
//         this.firstName = split[0];
//         this.surname = split[1];
//       }
//   });
  
//   user.fullName = "Петя Иванов";
//   console.log( user.firstName ); // Петя
//   console.log( user.surname ); // Иванов


// var info = {
//     title: 'Hello! ',
//     subTitle: 'World',

//     get line(){
//         return this.title + this.subTitle; 
//     },

//     get line2(){
//         return this.subTitle + this.title; 
//     },

//     set line(value) {
//         this.title = value + this.title;
//     }
// }

// console.log( info.line );


var info = {
    adress: {
        city: '',
        country: ''
    }
}


Object.defineProperty(info, 'update', {
    set: function(value){
        if (Array.isArray(value)) {
            this.adress.city = value[0];
            this.adress.country = value[1];
        } else {
            this.adress = Object.assign(this.adress, value);
        }
    }
})