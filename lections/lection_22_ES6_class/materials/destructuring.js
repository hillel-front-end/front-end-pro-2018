console.log('Lection_22');



// var list = [2, 6, 9];

// var a = list[0];
// var b = list[1];
// var c = list[2];



// var [a, , c] = [[1,5,2,3,2], 6, 'sasdasd'];


// console.log(a);
// // console.log(b);
// console.log(c);

// var obj = {
//     foo: 300
// }

// var { a, b } = { x: 20, u: 30, a: 10, b: obj };

// var b = obj;

// console.log(a, b);

//-------------------------------------------------


// var { a = 'default' , b: { x = 80, y }, c: [n, m = 20, k] } = { x: 10, a: 30,  y: 20, b: { x: 500 }, c: [0, 0] };

// console.log(a, n, m, k);

// var {a, b = 500, c, d: [x = 'x500', y], e: { k, l }} = Object.assign({ a: 100 }, getValues());
// function onLoad(response){
//     // var age = response.data.age;
//     // var list = response.list;
//     // var name = response.data.name;

//     var { list, data: { age, name }, age } = response;

//     console.log(age, name, list);
// }

// var foo = () => {
//     return {
//         x: 20,
//         y: 30
//     };
// }


// onLoad({
//     list: [],
//     age: 40,
//     data: {
//         length: 10,
//         name: 'asd',
//         age: 60
//     }
// });



// var list = [7, , 42];
// var [a = 1, b = 2, c = 3, d] = list;

// console.log(a, b, c, d); // 7 2 42 undefined


// var {a, b = 500, c, d: [x = 'x500', y], e: { k, l }} = Object.assign({ a: 100 }, getValues());
// console.log(a, b, c, x, y, k, l);


// function getValues() {
//     return {
//         c: 30,
//         d: [80, 90],
//         e: { k: 100, l: 200 }
//     }
// }


// var list = [ 1, 2, 3 ];

// var buffer = list[0];
// list[0] = list[2];
// list[2] = buffer;
// console.log(list);
// [list[0], list[2]] = [list[2], list[0]]
// console.log(list);


// var [ a, , b ] = list;

// console.log(a, b);

// [ b, a ] = [ a, b ];

// console.log(a, b);




var m1 = () => {
    return {
        list: [],
        a   : 10
    }
}


var m2 = () => {
    return {
        data: {
            str: 'hello',
            a: 100
        }
    }
}


var m3 = () => {
    return {
        b: 20
    }
}

var {a, b, data: {str, a}} = Object.assign(m1(), m2(), m3());