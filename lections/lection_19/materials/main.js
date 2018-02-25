// XHR
// XMLHttpRequest

var data;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {
        return;
    }

    console.log(xhr);

    data = JSON.parse(xhr.responseText);

    // render(data);
}

// Promise




// if (xhr.status != 200) {
//     console.log( xhr.status + ': ' + xhr.statusText );
// } else {
//     console.log( xhr.responseText ); 
// }

