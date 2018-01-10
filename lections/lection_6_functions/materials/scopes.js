// window.Global = { x: 10, y: 20 }
var x = 10;
y = 20;


function f1() {  // LE = { z: 30 }, f1.scope -> Global
    var z = 30;

    // x = 200;

    function f2(a) { // LE = { a: 9 }, f2.scope -> f1.LE
        x++;

        console.log(x, z);
    }


    function f3() { // LE = { p: 300 }, f3.scope -> f1.LE
        var p = 300;

        console.log(x, p);
    }



    f2(9);
    f3();
}



console.log('before', x);
f1();
console.log('after',x);
// console.log(z);