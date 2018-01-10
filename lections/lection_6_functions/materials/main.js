console.log('Lection 6');


// function show(z) {

//     console.log(z);
//     for(i = 0; i < z.length; i++){
//         document.write(z[i] + " ");
//     }

//     document.write("<hr />");
// }


// A = [1, 2, 3];
// // Sum();
// show(A);

// A.push(10);

// show(A);


// show("asdasdasd");


// function Sum(a, b) {
//     return a + b;
// }

// res = 999;
// // Sum(2, -7, res);

// res = Sum(22, 3) - Sum(200, 187);

// console.log(res);

// function isOdd(x) {
//     return x % 2 == 0;
// }


// function outputArray(a) {
//     if (!a.length) {
//         return console.error('a is not array');;
//     }

//     for(i = 0; i < a.length; i++){
//         document.write(a[i] + " ");
//     }

//     document.write("<hr />");
// }

// outputArray([2,3,54,2]);
// outputArray(634);

n = 10;
m = 20;

A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);

    for(j = 0; j < A[i].length; j++){
        A[i][j] = getRand(0, 10);
    }
}

sumAll = [];

for(i = 0; i < A.length; i++){
    sumAll.push(sumRow(A[i]));
}

output2Array(A);
console.log(sumAll);


function getRand(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}

function sumRow(A) {
    var sum = 0;

    for(var i = 0; i < A.length; i++){
        sum += A[i];
    }

    return sum;
}


function output2Array(a) {
    if (!a.length) {
        return console.error('a is not array');;
    }

    for(i = 0; i < a.length; i++){
        for(j = 0; j < a[i].length; j++){
            document.write(a[i][j] + " ");
        }
        document.write("<br />");
    }

    document.write("<hr />"); 
}
