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
    item.style.borderRadius = '100%';
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

//красим кнопки при наведении и наоборот
btn.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = 'grey';
    });
    item.addEventListener('click', function() {
        item.style.backgroundColor = 'white';
    });
});

