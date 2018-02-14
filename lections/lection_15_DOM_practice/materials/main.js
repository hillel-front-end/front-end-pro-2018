window.onload = function () {
    var block = document.querySelector('.block');

    var flag = true;

    

    // document.body.addEventListener('click', function(){
    //     console.log('body');
    // }, false);

    // document.addEventListener('click', function(){
    //     console.log('document');
    // }, flag);

    // отмена действия на событие по умолчанию !!!
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    });

    block.addEventListener('click', function(){
        // console.log('block');

        // creating
        var newDiv = document.createElement('div');

        newDiv.innerHTML = "Hello!";
        newDiv.setAttribute('data-flow', '123');
        newDiv.setAttribute('data-glow', '123');

        newDiv.dataset.foo = '10';
        

        setTimeout(function(){
            newDiv.removeAttribute('data-glow');
            delete newDiv.dataset.foo;
        }, 1000);

        //appending
        block.appendChild(newDiv);
        // console.dir(newDiv);


        // clone

        var newElem = block.cloneNode(true);
        newElem.addEventListener('mouseenter', function(){
            console.log('entered');
        });
        newElem.style.position = "static";
        document.body.appendChild(newElem);

    }, flag);
}