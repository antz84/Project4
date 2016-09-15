console.log('Calculator');

var _0 = document.getElementById('_0');
var _1 = document.getElementById('_1');
var _2 = document.getElementById('_2');
var _3 = document.getElementById('_3');
var _4 = document.getElementById('_4');
var _5 = document.getElementById('_5');
var _6 = document.getElementById('_6');
var _7 = document.getElementById('_7');
var _8 = document.getElementById('_8');
var _9 = document.getElementById('_9');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var swap = document.getElementById('swap');
var percent = document.getElementById('percent');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');
var clear = document.getElementById('clear');
var display = document.getElementById('screen');

console.log(_0);
console.log(_1);
console.log(_2);
console.log(_3);
console.log(_4);
console.log(_5);
console.log(_6);
console.log(_7);
console.log(_8);
console.log(_9);
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
console.log(swap);
console.log(percent);
console.log(decimal);
console.log(equals);
console.log(clear);
console.log(display);

// write functions here later

_0.addEventListener('click', function() {
  console.log(0);
  display.innerText = 0;
});

_1.addEventListener('click', function() {
  console.log(1);
  display.innerText = 1;
});

_2.addEventListener('click', function() {
  console.log(2);
  display.innerText = 2;
});

_3.addEventListener('click', function() {
  console.log(3);
  display.innerText = 3;
});

_4.addEventListener('click', function() {
  console.log(4);
  display.innerText = 4;
});

_5.addEventListener('click', function() {
  console.log(5);
  display.innerText = 5;
});

_6.addEventListener('click', function() {
  console.log(6);
  display.innerText = 6;
});

_7.addEventListener('click', function() {
  console.log(7);
  display.innerText = 7;
});

_8.addEventListener('click', function() {
  console.log(8);
  display.innerText = 8;
});

_9.addEventListener('click', function() {
  console.log(9);
  display.innerText = 9;
});

add.addEventListener('click', function() {
  console.log('+');
  return addition;
});

subtract.addEventListener('click', function() {
  console.log('-');
});

multiply.addEventListener('click', function() {
  console.log('x');
});

divide.addEventListener('click', function() {
  console.log('/');
});

swap.addEventListener('click', function() {
  console.log('+/-');
});

percent.addEventListener('click', function() {
  console.log('%');
  display.innerText = '%';
});

decimal.addEventListener('click', function() {
  console.log('.');
  display.innerText = '.';
});

equals.addEventListener('click', function() {
  console.log('=');
  display.innerText = '=';
});

clear.addEventListener('click', function() {
  console.log('clear');
  display.innerText = '';
});
