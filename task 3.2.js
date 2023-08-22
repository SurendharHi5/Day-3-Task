let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    for(let i = 0 ; i< data.length ; i++){
        console.log(data[i].flags);   
    }

};

xhr.send();