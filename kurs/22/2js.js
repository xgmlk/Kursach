'use strict';

//обработчики события
let btn = document.querySelectorAll('button'),
    clear = document.querySelector('#clearbtn'),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('clicked');
// };

// console.log(btn);

btn.forEach(function(item, i , buttons) {
    // console.log(item);
    item.style.borderRadius = '20%';
});

// btn[0].addEventListener('click', function(event) {
//     let target = event.target;
//     target.style.backgroundColor = 'red';
//     // console.log('произошло: ' + event.type + ' на элементе ' + event.target);
//     // console.log(btn[0].type);
// });

// btn[1].addEventListener('click', function(event) {
//     let button = btn[0];
//     btn[0,1].style.backgroundColor = 'grey';
// });
// btn[0].addEventListener('click', function() {
//     alert('second click');
// });

// btn[1].addEventListener('mouseenter', function() {
//     alert('попробуй нажми лол');
// });

clear.addEventListener('click', function() {
    let btns = btn[0],
        btnes = btn[1];
    btns.style.backgroundColor = 'white';
    btnes.style.backgroundColor = 'white';
});
//команда отменяет переход по ссылке
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('произошло: ' + event.type + ' на элементе ' + event.target);

});

//красим кнопки при наведении и кликах
btn.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = 'rgb(95, 104, 45)';
    });
    item.addEventListener('mousedown', function() {
        item.style.backgroundColor = 'rgb(69, 97, 24)';
    });
    item.addEventListener('mouseup', function() {
        item.style.backgroundColor = 'rgb(95, 104, 45)';
    });
    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = 'rgb(188, 205, 90)';
    });
});
//синтаксис для setTimeout
// setTimeout(func, delay);

function sayHello() {
    console.log('Hello World!');
}

// let timerId = setTimeout(sayHello, 2000);

//отключение setTimeout
// clearTimeout(timerId);


//через каждые 2 секунды
let timerId = setInterval(sayHello, 2000);
clearInterval(timerId);

//рекурсивный setTimeout
let timer = setTimeout(function log() {
    console.log('hello');
    setTimeout(log, 2000);
});

clearTimeout(timer);

let myStart = document.querySelector('#start'),
    animBox = document.querySelector('#animBox');

    function animation () {
        let pos = 0;
        let id = setInterval(frame, 10);
        
        function frame () {
            if (pos == 375) {
                clearInterval(id);
            } else {
                pos++;
                animBox.style.top = pos + 'px';
                animBox.style.left = pos + 'px';
            }
        }
    }
    myStart.addEventListener('click', animation);


    let btnAll = document.querySelector('.panel'),
        btns = document.getElementsByTagName('button');

        btnAll.addEventListener('click', function(event) {
            if (event.target && event.target.tagName == 'BUTTON') {
                console.log('HI loh!');
            }
        });

        //кроме делигирования по tagName есть еще:
        //classList.contains('first')
        //matches('button.first')