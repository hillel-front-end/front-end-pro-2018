console.log('Lection_21');

/*

+ Перебирающие методы ES5
+ var, let, const
+ генераторы
+ arrow functions

*/



var arr = [1, 2, 3, 4, 5];

// arr.forEach(function(item, pos, arr){
//     console.log(item, pos, arr);
// });


// var res = arr.map(function(item, pos, arr){
//     // console.log(item, pos, arr);
//     // if (item > 3) {
//     //     return item;
//     // }

//     return {
//         value: item,
//         position: pos
//     }
// });

// console.log(res);

// var list = [{ value: 10 }, { value: 0 }, { value: 20 }];

// // var res = list.filter(function(item, pos, arr){
// //     console.log(item, pos, arr);

//     return !!item.value; // true or false
// });

// console.log(res);



// var res = arr.every(function(item, pos, arr){
//     console.log(item, pos, arr);

//     return item > 0;
// });

// console.log(res);

// var res = arr.some(function(item, pos, arr){
//     console.log(item, pos, arr);

//     return item < 0;
// });

// console.log(res);


// // -----------------------------
// var res = [67,4,3,4,2].reduce((prev, item) => prev + item, 0);

// console.log(res);


// var res = list.reduce(function(prev, item){
//     prev.push(item.value);

//     return prev;
// }, []);

// console.log(res);







// ------------------------------------


// var x = 10;

// function foo() {
//     let y = 20;
// }

// if (5 > 0) {
//     let z = 10;
// }


// for(let i = 0; i <= 10; i++) {
//     if (5 > 0) {
//        console.log(i);
//     }
// }

// console.log(i);
// console.log(z);



// var VAL = 10;
// const val = 10;
// const str = 'hello';
// const obj = {
//     x: 10,
//     y: 20
// }

// val++;
// console.log(val);



// var obj = {
//     z: 10,
//     f: function(x, y) {
//         console.log(this);

//         return x + y + this.z;
//     }
// }


// console.log(obj.f(2, 6));


// var foo = function(x, y) {
//     return x + y;
// }

// var bar = (x, y) => x + y;

// var pow2 = value => {
//     if (value <=0) {
//         return console.error('foo000');
//     }

//     return value*value;
// };


// var bar = (x, y) => {
//     return x + y;
// }
// var dar = () => {
//     return 208;
// }




function* gen() {
   for(let arr of arguments){
    for(let item of arr){
        if (item > 0) {
            yield item;
        } else {
            // yield console.error('item < 0');
        }
    }
   }
    
}

// var foo = gen([7,-3,34],[5,-8,2],[9,-5,345]);

// // for (let item of [2,7,8,2]) {
// //     console.log(item);
// // }

// for (let item of  gen([7,-3,34],[5,-8,2],[9,-5,345])) {
//     console.log(item);
// }



// console.log(foo.next());
// foo.return()








function* range (start, end, step) {
    while (start <= end) {
        yield start;
        start += step;
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i);
}