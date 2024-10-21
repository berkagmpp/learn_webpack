import number_a from './a.js';
import number_b from './b.js';
import number_c from './c.js';

console.log(number_a);
console.log(number_b);
console.log(number_c);

const $buttonA = document.querySelector('#button_a');
const $buttonB = document.querySelector('#button_b');
const $buttonC = document.querySelector('#button_c');
const $display = document.querySelector('.display');

$buttonA.addEventListener('click', function () {
    $display.textContent = number_a;
});

$buttonB.addEventListener('click', function () {
    $display.textContent = number_b;
});

$buttonC.addEventListener('click', function () {
    $display.textContent = number_c;
});
