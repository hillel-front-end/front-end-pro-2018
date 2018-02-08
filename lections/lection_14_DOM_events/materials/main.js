window.onload = function() {
    // var block = document.querySelector('.block');
    

    // block.style.border = "2px solid red";
    // block.innerHTML += "<hr />";

    // setInterval(function(){
    //     block.style.backgroundColor = 'rgb('+ getRV() +', '+ getRV() +', '+ getRV() +')';
    // }, 1000);


    var goods = document.querySelectorAll('.good');
    console.dir(goods);

    for(var i = 0; i < goods.length; i++){
        var color = 'rgb('+ getRV() +', '+ getRV() +', '+ getRV() +')';
        goods[i].style.border = "3px solid " + color;
    }

    setInterval(function(){
        for(var i = 0, color; i < goods.length; i++){
            color = 'rgb('+ getRV() +', '+ getRV() +', '+ getRV() +')';
            goods[i].style.border = "3px solid " + color;
        }
    }, 500);





    // var count = 0;
    // btn.onclick = function(event) {
    //     if(count === 3) {
    //         this.onclick = null;
    //     }
    //     count++;
    //     console.log(event);
    //     // this.style.backgroundColor = 'rgb('+ getRV() +', '+ getRV() +', '+ getRV() +')';
    // }

    var btns = document.querySelectorAll('.good button');
    console.log(btns);

    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', onClickHandler);
    }
    
    function onClickHandler(event){
        this.parentElement.style.backgroundColor = 'rgb('+ getRV() +', '+ getRV() +', '+ getRV() +')';
    }

    var unique =   document.querySelector('#unique')

    unique
        .addEventListener('mouseover', function(event){
            console.log(event.type, event);
        });
    
    unique
        .addEventListener('mouseout', function(event){
            console.log(event.type, event);
        });

    unique
        .addEventListener('mousemove', function(event){
            console.log(event.type, event);
        })
}

function getRV() {
    return Math.floor(Math.random()*256);
}