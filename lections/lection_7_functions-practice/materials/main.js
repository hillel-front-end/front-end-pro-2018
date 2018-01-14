// global = 10;


// function f0() {
//     var f0param = 500;
//     function f1(a) {
//         var local_1 = 20;
    
    
//         f2(a);
    
    
//         function f2(foo) {
//             var local_2 = 30;
    
//             console.log(global, local_2, a, f0param);
//         }
//     }

//     f1(200);
// }


// f0();




// function factory(a, step){

//     function f1(){
//         a += step;
//         console.log(a);
//     }


//     return f1;
// }


// var p = factory(4, 5);

// p();
// p();
// p();




console.log('--------------');


function f1(){
    var p = 200;


    function f2(x, k) {
        console.log(arguments);
        console.log(p, x, foo);
    }

    function f3() {
        var p = 600,
            foo = 'do';

        f2(p, 10, 7,4,4,2);
    }

    f3();
}

f1();