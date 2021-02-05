'use strict';
document.addEventListener('DOMContentLoaded', () => {

    let number = 50,
        divine,
        divineNumber,
        guess = 0;

    let isNamber = n => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    divineNumber = () => {
        divine = prompt('Угадай число от 1 до 100');
        console.log('divine: ', divine);

        if(+divine > number){
            alert("Загаданное число меньше");
            divineNumber();
        } else if (+divine < number && divine !== null) {
            alert("Загаданное число больше");
            divineNumber();
        } else if (!isNamber(+divine)){
            alert("Введи число");
            divineNumber();
        } else if(divine === null){
            alert("Игра окончена");
            guess = 1;
        } else if (+divine === number){
            alert("Поздравляю, Вы угадали!!!");
            guess = 1;
        }
    };

    if (guess === 0){
        divineNumber();
    }
});