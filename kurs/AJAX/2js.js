'use strict';

let inpRub = document.getElementById('rub'),
    inpUsd = document.getElementById('usd');

    console.log(inpRub);
    console.log(inpUsd);

    inpRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        // request.open(method, url, async, login, pass);
        request.open('GET', '/json.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        //status 
        //statusText
        //responseText/response
        //readyState

        request.addEventListener('load', function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inpUsd.Value = inpRub.Value / data.usd;
            } else {
                inpUsd.Value = 'sorry';
            }
        });
    });

    // console.log(inpUsd);