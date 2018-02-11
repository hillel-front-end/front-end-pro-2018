window.onload = function() {
    var block = document.querySelector('.block'),
        block2 = document.querySelector('.block2');

    // block.addEventListener('mousedown', function(event){
    //     console.log('1', event.type, event);
    // });

    // block.addEventListener('mousemove', function(event){
    //     console.log(event.type, event);
    // });

    // block.addEventListener('mouseup', function(event){
    //     console.log('1', event.type, event);
    // });

    // block.addEventListener('click', function(event){
    //     console.log('1', event.type, event);
    // });

    // block2.addEventListener('mousedown', function (event){
    //     console.log('2', event.type, event);
    // });


    // block2.addEventListener('mouseup', function(event){
    //     console.log('2', event.type, event);
    // });

    block2.addEventListener('click', onClickBl2);

    // setTimeout(function(){
    //     block2.removeEventListener('click', onClickBl2);
    // }, 3000);

    // setTimeout(function(){
    //     block2.addEventListener('click', onClickBl2);
    // }, 5000);


    function onClickBl2(event){
        console.log('2', event.type, event);
    }
}