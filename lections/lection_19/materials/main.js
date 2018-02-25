
var data, data2, result;



doAjax('data.json', 'data');
doAjax('data2.json', 'data2');


function check() {
    // console.log(data, data2);
    if (!data  || !data2) {
        return;
    }

    
    result = data.concat(data2);

    // doOperation();

    console.log(result);
}

function doOperation() {
    
}


function doAjax(url, target) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            return;
        }

        window[target] = JSON.parse(xhr.responseText);
        check();
    }
}



