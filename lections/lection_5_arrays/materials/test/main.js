// 1

var arr = [1, 2, 3, 6, 7];
separator = "*"
console.log(arr.join(separator));


// 2

/*
ul
    li /li
    li /li
    li /li
/ul
*/

document.write('<ul>');
for(i = 0; i < arr.length; i++){
    document.write('<li>' + arr[i] + '</li>');
}
document.write('</ul>');

// 3

// isEven = (arr.length % 2 == 0);

// if(arr.length % 2 == 0) {
//     isEven = true;
// } else {
//     isEven = false;
// }
// console.log(arr);
// if (isEven) {
//     arr.splice(arr.length/2-1, 2);
// } else {
//     arr.splice(Math.floor(arr.length/2), 1);
// }

// console.log(arr);


// 4

arr = [1, 2, 3];

do {
    res = prompt();
    isEnd = res == "&";
    if(!isEnd) {
        arr.push(res);
    }
}while(!isEnd);
console.log(arr);