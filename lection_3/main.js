console.log('lection_3');

// a = +prompt('a=');
// b = +prompt('b=');
// a = 4;
// b = 12;

// if( a < b ) {
//     sum = 0;
//     p = 1;
//     for( i = a; i <= b; i++) {
//         if( i % 2 == 0 ){
//             console.log(i);
//             sum += i;
//         } else {
//             // do it
//         }

//         if ( i % 2 != 0 ) {
//             p *= i;
//         }
//     }
// }

// console.log('sum = ', sum);
// console.log('mul = ', p);
// // --------------------------------

// n = +prompt('n=');

// for(i = 1, fact = 1; i <= n; i++){
//     fact *= i;
// }

// console.log('factorial('+ n +') = ' + fact);


// -------------------------


// a = +prompt('a=');
// n = +prompt('n=');
// res = 1;
// for(i=0; i < n; i++){
//     res *= a;
// }
// console.log(res);

// -------------------------


a = +prompt('a=');
b = +prompt('b');

if ( !(a == b) && a < b ) {
    for(i = a; i <= b; i++){
        console.log(i*i);
    }
} else {
    for(i = a; i >= b; i--){
        k = i * i;
        if (i < 0) {
            k = -k;   
        }
        console.log(k);
    }
}