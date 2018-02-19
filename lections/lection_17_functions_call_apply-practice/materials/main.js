// var obj1 = {
//         title: 'title 1'
//     },
//     obj2 = {
//         title: 'title 2'
//     }


// function showTitle() {
//     // console.log(this.title, a, b);

//     // console.log(arguments);

//     // return [].slice.call(arguments, 0);
//     var arr = [].slice.call(arguments, 0);
//     arr.splice(0, 0, 88 ,44 ,66, 23);

//     return arr;
//     // return arguments;
// }

// // showTitle.call(obj1, 10, 70);
// // showTitle.call(obj2);

// // var res = showTitle(1, 6, 7, 8, 2);
// // console.log(res);


// // apply

// // [].splice.apply(arguments, [0, 0, 77, 8,345, 4,23, 3,98]);


// // bind

// // function getList(a, b) {
// //     console.log(this.list, a + b);
// //     return this.list;
// // }

// var data = {
//         list: [1, 2]
//     },
//     data2 = {
//         list: [12, 23]
//     }

// // var _getList = getList.bind(data2);

// // _getList(7, 2);
// // getList.bind(data2)(2, 8);

// var getList = function(a, b) {
//     console.log(this.list, a + b);
//     return this.list;
// }.bind(data);

// getList(7, 9);

var obj = {
    value: 20
};


obj.calc = function(a) {
    // var self = this;
    var _getRand = _getRand.bind(this);

    return Math.floor(_getRand()*a);


    function _getRand() {
        return Math.random()*this.value;
    }
}

var res = obj.calc(6);
// console.log(res)



// function filter(type){
//     if (this.length) {
//         for(var item = 0; item < this.length; item++) {
//             if (typeof this[item] !== type){
//                 this.splice(item, 1);
//                 item--;
//             }
//         }
//     } else {
//         for(var item in this) {
//             if (typeof this[item] !== type){
//                 delete this[item];
//             }
//         }  
//     }
    
// }

// var A = [1, 2, 3 ,4, "asd"];

// filter.call(A, 'number');
// console.log(A);



var arr = [1 ,2,4,34 ,123, 6];

// var sum = 0;
arr.forEach(function(item){
    // console.log(item, pos, source);
    document.write(item + "<br />");
    // sum += item;
});


var res = arr.map(function(item, pos, source){
    // console.log(item, pos, source);
    if (item > 5) {
        return item * 10;
    }

    return item;
});

console.log(res, arr);


var data = [
    {
        title: '',
        price: 10
    },
    {
        title: '',
        price: 102
    },
    {
        title: '',
        price: 103
    },
    {
        title: '',
        price: 104
    }
];
console.log(data);
var prices = data.map(function(item){
    return item.price;
});

console.log(prices);

var data2 = prices.map(function(item){
    return {
        title: 'default',
        price: item
    }
});

console.log(data2);