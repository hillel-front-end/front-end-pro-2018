console.log('Lection_20');




var promise = new Promise(function(resolve, reject){

    // async operation
    var x = Math.floor(Math.random()*10) + 5;

    setTimeout(function(){
        console.log(1);

        if (x > 5) {
            resolve(x, 7, [2, 3, 4]);
        }

        reject(x);
    }, 500);

});

promise
    .then(onFulFilled, onRejected)
    .then(function(x) {
        console.log('3_1', x);
    }, function(x) {
        console.log('3_2', x);
    });



function onFulFilled(data) {
    return new Promise(function(resolve, reject){
        console.log('start 2_1', data);
        setTimeout(function(){
            console.log('finish 2_1', data);
            resolve(data);
        }, 1000);
    });
}

function onRejected(data) {
    var async = new Promise(function(resolve, reject){
        console.log('2_2', data);

        reject(data);
    });


    return async;
}