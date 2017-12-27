n = 10;
m = 20;

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

for(i = 0, sum = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
      if(j % 2 != 0) {
        sum += A[i][j];
      }
    }
}

console.log(sum);