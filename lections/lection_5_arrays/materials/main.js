n = 5;
m = 5;

A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}
console.log(A);

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        // console.log(A[i][j]);

        A[i][j] = Math.floor(Math.random()*10);
        document.write(A[i][j] + " ");
    }
    document.write("<br/>");
}

console.log(A);



// сумма непарных столбцов

// for(i = 0, sum = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//       if(j % 2 != 0) {
//         sum += A[i][j];
//       }
//     }
// }

// console.log(sum);




var tA = new Array(A.length);

for(i = 0; i < tA.length; i++){
    tA[i] = new Array(A[i].length);
}


for(i = 0, sum = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
      tA[j][i] = A[i][j];
    }
}


document.write('<hr />tA<hr />');
for(i = 0; i < tA.length; i++){
    for(j = 0; j < tA[i].length; j++){
        // console.log(A[i][j]);

        
        document.write(tA[i][j] + " ");
    }
    document.write("<br/>");
}