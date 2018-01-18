console.log('Lection 8');


var obj = {
    age: 202,
    name: 'Vasya',
    list: [1,2,3,4],
    date: {
        month: '',
        year: '',
        foo: {}
    }
}

// console.log(obj.age, obj['age']);

// obj.age++;

// // console.log(obj.age);
// obj.height;
// // undefined;

// // obj.name = undefined;
// delete obj.name;

// console.log(obj);

// for(var i = 0; i < obj.list.length; i++){

// }



console.log('--------------------------------');


// for(var key in obj){
//     var item = obj[key];

//     for(var elem in item){
//         console.log(elem);
//     }

//     // console.log(key, item);
// }

console.log('--------------------------------');


// var a = 10;
// var b = a;
// b++;
// console.log(a, b);

// var obj1 = { value: 10 };
// var obj2 = obj1;
// obj2.value++;
// console.log(obj1, obj2);


// function f(a){
//     a.value++;
//     console.log('inner', a);
// }

// var p = {
//     value: 200
// }
// console.log(p);
// debugger;
// f(p);
// console.log(p);

console.log('--------------------------------');


var handlers = {
    age: 20,
    sum: function(a, b){
        return a + b;
    },
    multiplication: mul
}

var res = handlers.sum(6, 9);

console.log(handlers, res);

function mul(a, b) {
    return a*b;
}


var info = {
    list: [
        {
            value: 10,
            mul: 2
        },
        {
            value: 12,
            mul: 3
        },
        {
            mul: 8
        }
    ]
}

console.log(info)


for(var i = 0,sum =0, arr = info.list; i < arr.length; i++){
    if (arr[i].value){
        sum += arr[i]['value'] * arr[i].mul;
    }
    
}

console.log(sum);