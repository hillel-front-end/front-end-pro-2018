console.log('Lection_18');

var data = `{
    "list": [
        1, 2, 3
    ],
    "ukraine": {
        "cities": [],
        "tel_number": "+380",
        "size": 603
    }
}`;


window.onload = function() {

    
    

    // var btn = document.querySelector('#btn'),
    //     input = document.querySelector('#input'),
    //     key = document.querySelector('#key'),
    //     clear = document.querySelector('#clear'),
    //     session = document.querySelector('#session');


    // var isEmpty = window.localStorage.getItem('value') ? false : true;

    // if (!isEmpty) {
    //     // btn.classList.add('hidden');
    // }


    // btn.addEventListener('click', function(){
    //     localStorage.setItem(key.value, input.value);
    //     location.reload();
    // });

    // clear.addEventListener('click', function(){
    //     localStorage.clear();
    //     location.reload();
    // });

    // session.addEventListener('click', function(){
    //     sessionStorage.x = {id: 10};
    // });

    // var parseData = JSON.parse(data);
    
    // console.log(data, parseData);

    // var info = {
    //     id: 10,
    //     values: [
    //         {
    //             value: 30
    //         },
    //         {
    //             value: 30
    //         }
    //     ]
    // };

    // var strData = JSON.stringify(info);

    // console.log(info, strData);

    var isDefined = false;

    if (localStorage.list) {
        isDefined = true;
    }



    var btns = document.querySelectorAll('.block');

    btns.forEach(function(item){
        item.addEventListener('click', function(){
            var record = {
                    id: this.dataset.id 
                },
                list = [];

            if (isDefined) { 
                list = localStorage.list || '[]';

                list = JSON.parse(list);
            } else {
                isDefined = !isDefined;
            }

            list.push(record);
            localStorage.setItem('list', JSON.stringify(list));
        });
    });
}