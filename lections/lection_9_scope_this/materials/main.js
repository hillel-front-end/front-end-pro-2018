console.log('Lection 9');

// + Область видимости+
// + this подробно
// + Контекст выполнения функции
// + Замыкания
// + обьекты Scope и Lexical Environment
// + Разрешенние переменных


// function doMath(x, znak, y) {
//     var operation = {
//         '*': mul,
//         '/': div
//     }

    // return operation[znak](x, y);
// }


// var res = doMath(2, "*", 8);
// console.log(res);

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }




// var obj = {
//     x: 10,
//     list: [1, 2, 3, 4],
//     sumList: sumInObject
// };

// var obj2 = new Object();
// obj2.x = 200;
// obj2.list = [1,7,3,5,32,1];
// obj2.calculate = sumInObject;


// // sumInObject();
// // obj.sumList();
// // obj2.calculate();


// function sumInObject() {
//     console.log(this);
//     var sum = 0;

//     this.list = this.list || [];

//     for(var i = 0; i < this.list.length; i++){
//         sum += this.list[i];
//     }

//     this.result = sum;
//     return sum;
// }



// // function f1() {
// //     // this
// //     console.log(this);
// //     function f2(){
// //         //this
// //         console.log(this);
// //     }

// //     f2();
// // }

// // f1();

// var data = {
//     result: 10,
//     f1: function(){
//         this.result *= 2;
//         console.log(1);
//         return this;
//     },
//     f2: function(){
//         this.result += 2;
//         console.log(2);
//         return this;
//     },
//     f3: function(){
//         this.result -= 2;
//         console.log(3);
//         return this;
//     }
// }

// data.f3().f1().f2();

// function show() {   
//     for(var item in this){
//         if (arguments.callee === this[item]){
//             delete this[item];

//             continue;
//         }

//         document.write(item + ": " + this[item] + "<br />");
//     }
// }

// data.show = show;
// data.show();

var trash = {
     f1: function(){ console.log('f1'); },
    f2: function(){ console.log('f2'); },
    show: function(){ console.log('show'); }
}


var obj = {};
obj.init = init;
obj.init(['show', 'f2'], trash);
obj.init(['show', 'f1'], trash);

function init(list, source){
    for(var i = 0; i < list.length; i++){
        this[list[i]] = source[list[i]];
    }
}