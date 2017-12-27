// A = [12, 42, 23, -4, -25];

// // A[20] = true;

// console.log(A);
// sum = 0;
// for(i = 0, k = 0; i < A.length; i++){
//     console.log(A[i]);

//     if( A[i] > 0 ) {
//         sum = sum + A[i];
//         k++;
//     }
// }

// res = sum / k;
// console.log(res);

// B = [1,5,2,3, true, false, 2,5, "10", "hello", [2,8,2] ];


// for(i = 0, sum = 0; i < B.length; i++){
//     // console.log( typeof B[i] );

//     if( typeof B[i] == "number") {
//         sum += B[i];
//     }
// }

// console.log(sum);

// A = [];
// do {
//     value = +prompt();
//     check = value >= 0 && value < 5;

//     if(!check) {
//         console.error('input pls 0 > length > 5');
//     }
// } while(!check);

// A.length = value;

// for(i = 0; i < A.length; i++){
//     A[i] = prompt();
// }

// console.log(A);


A = [2,3,51];
B = [8,6,3,2];

C = [];

// C[C.length] = false;

// for(i = 0; i < A.length; i++){
//     C[C.length] = A[i];
// }

// for(i = 0; i < B.length; i++){
//     C[C.length] = B[i];
// }

// ----------------------------------------------------------

// for(i = 0, j= 0, part = true; i < A.length + B.length; i++){
//     if (part) {
//         C[C.length] = A[i];
//     } else {
//         C[C.length] = B[j++];
//     }

//     if (i == A.length-1) {
//         part = false;
//     }
// }

// console.log(C);

// ----------------------------------------------------



A = [];
A.length = 10;


for(let i = 0, a = 0; i < A.length; i++){
    a++;
    A[i] = Math.floor(Math.random()*21 - 10);
}

console.log(a);