"use strict";
//директива обозначает что код пишется на стандарте US6



//переменная - название переменной - присвоенное значение переменной
//переменная var видна в коде даже до ее обьявления
var leftBorderWidth = 1;
let second = 2;
//переменную const нельзя поменять т.к. это константа
const pi = 3.14;


var scobki; {
    //переменная let занесенная в фигурные скобки будет видна только внутри этих скобок
let Vnutri = 2;
//правильно выполнение
console.log(Vnutri);
}
//ошибка
// console.log(Vnutri);


//типы данных
//число. при делении на ноль можно получить infinity. 
// операция которая не подлежить математической логике даст значение not a number (NaN)
//умножить или разделить на строку
let number = 5;
//infinity
console.log(4/0);
//not a number (NaN)
console.log('hi' * 5);
//строка
let string = "Hi";
//символ используется редко
let sym = Symbol();
//логический тип данных - значение да = true, нет = false.
let boolean = true;
//когда чего то в коде не существует
null;
//объект без значения
undefined;
//структура для хранения любых данных
let obj = {};



//объект с различными типами данных.. данные человека
let person = {
    name: "John",
    age: 25,
    isMarried: false
};

//достаем значение name из оъекта person
//получаем в консоли name объекта John
//1 способ получить свойство
console.log(person.name);
//2 способ ковычки обязательно
console.log(person["name"]);

//массив . может собержать не только строки для хранения люых типов данных
let arr = ['1.png','2.jpg','3.bmp'];
//получаем 2 номер из массива, отсчет идет с нуля
console.log(arr[2])


//общение с пользвателем
//вывод в консоль
console.log();
//вывод на экран при открытии сайта
alert();
//практически тоже что и alert только с подтверждением или отрицанием (true или false)
confirm();
// тут можно вписать свое значение выводистся строкой
prompt();
// переменная со значением prompt / первое в фигурных скобках - вопрос/ второе ответ по умолчанию
let answer = prompt ("есть ли вам 18?", "");
//typeof - оператор для определения типа данных(строки,числа и т.д.)
// если использовать значение null в операторе typeof получится объект(object) это оффициальная ошибка в javacript
console.log(typeof(answer));

//операторы - сложение, вычитание, деление, умножение
// сложение двух строк
console.log( "arr" + " - object");
// сложение строки и числа все рано получится строка
console.log( 4 + " - object");
//таким образом можно получить тип данных number если перед значением promp поставить плюс
let operator = +prompt('есть ли вам 18', '');
// также можно проводить такие операции здесь
console.log( 4 + +" - object");
//икоремент и декоремент
let incr = 10,
    decr = 10;
//увеличиваем значение incr и уменьшаем decr на одну еденицу
incr ++;
decr --;
// выводим в консоль и получаем incr = 10 + 1, decr = 10 - 1
console.log(incr);
console.log(decr);
// перефиксная форма применения (сразу же применяются инкоремент и декоремент)
console.log(++incr);
console.log(--decr);
// постфиксная форма после того как мы вывели 10 и 10 в консоль, они изменились на 11 и 9
console.log(incr++);
console.log(decr--);
//проверяем 
console.log(incr);
console.log(decr);

// если операторы больше,меньше, больше или равен (>)  (<)  (>=)
// оператор % - возвращает остаток от деления двух чисел
// остаток 1
console.log(5%2);
//оператор равенства
// если равно один раз (=) - это присваивание
// два раза (==) - проверка на равенство
// три (===) - строгая проверка по типам данных

//разные типы данных , но в консоли будет true т.к. в обоих случаях  стоит значение 2
console.log('2' == 2);
//здесь в консоли будет false так как одина двойка это тип данных строка("2")
//а второй число (2)
console.log('2' === 2);
// логические операторы (и , или)
let isChecked = true,
    isClose = true;
//логический оператор (и)
// обазначения являются true и по этому в консоль мы также получим true
console.log(isChecked && isClose);
//получаем false в консоли так как одна из переменных равна false  а другя true
let isChecked1 = true,
    isClose1 = false;
    console.log(isChecked1 && isClose1);
// оператор (и)(&&) дает true только если оба или несколько (все) значения(аргументы) являются правдивыми (true)

//оператор (или) (||) дает true даже если только один из аргументов(значений) является правдивым
console.log(isChecked || isClose);
// тоесть false можно получить только если оба аргумента равны false

// если поставить перед переменной восклицательный знак (!) (оператор отрицания) значение переменной обратится в противо положное
console.log(isChecked || !isClose);


//порядок выпонения операторов нужно знать!

//команды Git

//для создания папки репозитория Git
//git init

//для создания конфига пользователся 
//git config --local(или global) user.name "Dima"
//git config --local user.email "(email)"

//добавить все файлы во второе состояние (состояние следения гитом за файлами)
//git add -A
//что бы добавить конкретное расширение файлов вместо -А *html например
//что бы конкретный файл просто вписать его название html.html

// git status посмотреть статус репозитория git


// чтобы перевести файлы из  второго состояния в третье
//git commit -a -m (пояснение что это за коммит)

//git remote add origin (https://github.com/(nickname)/(путь к репозиторию  в github))
//git push -u origin master
//origin - название


//условия, любое условие начинается с оператора if
if (2*4 == 8) {
    console.log("Верно!");
} 
//в консоли выводится Верно! тк 2*4 равняется 8
//else переводится как иначе (в другом случае)
if (2*4 == 7){
    console.log("Верно!");
} else {
    console.log("Неверно");
}
//в консоль получили неверно т.к оператор if не сработал
//а это значит что будет выполнятся оператор else


//первый if проверяет что переменная num меньше чем 49
//дальше после else можно так же ставить if и прописывать
//еще условие так можно делать сколько угодно
//в конце оставляем оператор else и в консоль мы получаем Yes
// тк наша переменная равна 50
let num = 50;

if (num < 49) {
    console.log("Not");
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('Yes');
}

//есть другой способ записать это в виде тернарного оператора
(num == 50) ? console.log('Верно') : console.log('Неверно');

//конструкция switch
//case - замена всех if, после case пишется действие
//которе должно выполнится если case сработает
//при использовании switch если что то сравнивается с определенный значением
//тогда нужно записывать это без использования двух знаков равенства 
//а просто записываея это значение
switch (num) {
    case num < 49:
        console.log("Not");
        break;
    case num > 100:
        console.log('Mnogo');
        break;
    case num > 80:
        console.log('ewe Mnogo');
        break;
    // case num == 50: **ОШИБКА строка 208
        case 50:
        console.log('Yes');
        break;
};
//если какое то условие выполнилось, тогда выполняется
//команда внутри него например:case num == 50:
//                             console.log('Yes');
//                             break;
//команда выполняется пока не встретит break;
//если не будет условия break; тогда команды начнуть выполнятся 
// одна за другой пока не встретят слово break; соответственно
//так же есть условие default - это то что выполнится в любом случае
switch (num) {
    case num < 49:
        console.log("Not");
        break;
    case num > 100:
        console.log('Mnogo');
        break;
    case num > 80:
        console.log('ewe Mnogo');
        break;
    default:
        console.log('default');
        break;
}

//циклы
//while - пока переменная num меньше чем 55 будут выполняться какие то действия
//и каждый раз когда будет выполняться этот цикл num будет увеличиваться на 1
while (num < 55) {
    console.log(num);
    num++;
}
 // do - привыз к действию(сделай что то)
do {
    console.log(num);
    num++;
} while (num < 55);
// do(делай) выводить переменную num , каждый раз когда запускается цикл
//прибавляй еденицу к переменной num и все эти действия работаеют пока 
// num меньше чем 55

//цикл for в скобках (1 условие - начало(с чего все начинается) (i = 1)
//2 условие прикотором цикл for остановит работу (i < 8)
//3 условие - что будет происходить каждый раз в новом цикле (i++)
// и каждое повторение цикла в консоль будет выводится переменная i [console.log(i);]
for (let i = 1; i < 8; i++) {
    console.log(i);
}


//когда переменная i достигнет числа 6 цикл прекратиться дострочно и дальше не пойдет
for (let i = 1; i < 8; i++) {
    if (i == 6){
        break;
    }
    console.log(i);
}
//в таком случае цифра 6 просто пропустится и код пойдет дальше без нее
// 1 2 3 4 5 -(6)- 7 
for (let i = 1; i < 8; i++) {
    if (i == 6){
        continue;
    }
    console.log(i);
}

//функции
//function *название функции* (*аргументы для функции*)
//имя функции должно быть глаголом с припиской того над чем выполняется действие
//параметры(аргументы) функции 
function showFirstMessege(text) {
    alert(text);
}

//вызываем функцию
showFirstMessege("hello!");

//как ведут переменные функции - объявленные переменные внутри функции работают ТОЛЬКО внутри этой функции
function showFirstMessege2(text) {
    alert(text);
    let num3 = 20;
    //правильно**
    console.log(num3);
}
//ошибка**
//console.log(num3);


//объявляем num5 до функции она равна 10, после она попадаем внуть функции
// и становится равна 20 и после ее вызова в консоли мы получим уже num5 = 20
// для того чтобы значение переменной поменялось нужно сначала вызвать функцию
//в которая меняет это значение
let num5 = 10;

function showFirstMessege3(text) {
    alert(text);
    num5 = 20;
}
showFirstMessege3("nado 20");
console.log(num5);

//замыкание функции это функция со всем доступными ей переменными
//команда console.log внутри функции сначала будет искать переменную num6
//внутри своей функции и потом пойдет искать переменную дальше во всех доступных
// ей коробках по очереди наружу
let num6 = 20;

function showFirstMessege4(text) {
    alert(text);
    console.log(num6);
}

console.log(num6);

//return - позволяет вызывать выдать параметры функции под любые команды
//

function calc(a,b) {
    return (a + b);
}

console.log(calc(3,4));

console.log(calc(7,7));

alert(calc(1,1));
//для наглядности return
function calc1 (a,b) {
    alert(a + b);
}


calc1(2,3);


//еще return позволяет возвращать перременные обратно во внешний мир
function retVar () {
    let num = 50;
    return num;
}
// когда вы запустим эту ^^^ функцию мы получим значение переменной num - 50
let anotherNum = retVar();
console.log(anotherNum);
//anotherNum = 50

// function declaration - функция которая объявленная в потоке кода (не внутри каких то коробок)
//такие функции создаются до начала кода и вызывать их можно до объявления
// function expression это когда функцию присваивают в переменную 

//ошибка**
// console.log(calc4);
let calc4 = function (a,b) {
    return (a + b);
};
//правильно**
console.log(calc4(3,7));
// эта функция создается только тогда когда код до нее доходит


//новый стандарт ES6
//создаем переменную calc5 присваиваем ей аргументы (a,b)
// => это стрелочная функция показывает что сейчас будет функция a+b
let calc5 = (a,b) => a+b

//вызываем функцию
console.log(calc5(1,2));

//свойства - позволяют просматривать данные 
//length - длина , в данном случае мы получили длину строки 4 буквы
let string1 = "test";
console.log(string1.length);

//методы позволяют изменять данные
// переводим строку сначала в регистр заглавных букв, затем маленьких
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

let twelve = "12.2";

//метод округления переменнной, получаем ровно 12(так же образует строку ("12.2") в число (12) )
console.log(Math.round(twelve));


//parseInt возвратил целое ЧИСЛО откинув пиксели **12
//а parseFloat десятичное ЧИСЛО так же откинув пикчели но оставив числа за точкой **12.2
let twelve1 = "12.2px";
console.log(parseInt(twelve1));
console.log(parseFloat(twelve1));
