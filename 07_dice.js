'use strict';
let num;
let i = 1;
let sum = 0;
let numero_str = prompt("How many dice rolls you want?");
const numero = parseInt(numero_str);
while (i <= numero){
  num = Math.floor(Math.random()*6+1);

  sum += num
  i++;
}
document.querySelector('#dado').innerHTML = "Sum of the rolls is: " + sum;
