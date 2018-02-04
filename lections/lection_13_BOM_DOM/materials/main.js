/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/

window.onload = function() {
    // var block = document.getElementById('block');
    // getElemenetsByClassName
    // getElementsByTagName

    // ---------------

    //querySelector
    //querySelectorAll

    // var block = document.querySelector('#block');
    // console.dir(block);

    // var elems = document.querySelectorAll('#block li');
    // console.log(elems);

    // for(var i = 0; i < elems.length; i++){
    //     elems[i].style.border = "2px solid black";
    // }

    // classList
    // className
    // style


    var elem = document.querySelector('.element');
    console.dir(elem);
    window.elem = elem;
    // elem.className += " block";

    // elem.style.top = "250px";
    // elem.style.left = "100px";
    // elem.style.backgroundColor = "blue";
    // elem.style.transition = ".1s";

    // elem.classList.add('block', 'p1', 'f2');
    // elem.classList.remove('three');

    // var direction = 1;
    // var step = 5;
    // setInterval(function(){
    //     var top = parseInt(elem.style.top);
    //     var step = step || Math.floor(Math.random()*10);
    //     elem.style.top = top + (step*direction) + "px";
    // }, 200);

    // setInterval(function(){
    //     direction = -direction;
    // }, 2000)


    var container = document.querySelector('.container');
    var block = document.querySelector('.block');

    function random() {
        var width = container.clientWidth,
            height = container.clientHeight,
            maxX = width - block.clientWidth,
            maxY = height - block.clientHeight;
            
        block.style.top = Math.floor(Math.random()*maxY) + 'px';
        block.style.left = Math.floor(Math.random()*maxX) + 'px';
    }

    window.random = random;
}


