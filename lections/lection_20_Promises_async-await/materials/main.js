console.log('Lection_20');

function loadData(url, data){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        // xhr.open(params);

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            resolve(xhr.responseText);
        }

        xhr.send();
    });
}


module.exports = {
    loadData
}


//---------------------------------


// products
//     .loadData()
//     .then();


// promise
//     .then(onFulFilled, onRejected)
//     .then(function(x) {
//         console.log('3_1', x);
//     }, function(x) {
//         console.log('3_2', x);
//     });

// function onFulFilled(data) {
//     return new Promise(function(resolve, reject){
//         console.log('start 2_1', data);
//         setTimeout(function(){
//             console.log('finish 2_1', data);
//             resolve(data);
//         }, 1000);
//     });
// }

// function onRejected(data) {
//     var async = new Promise(function(resolve, reject){
//         console.log('2_2', data);

//         reject(data);
//     });


//     return async;
// }