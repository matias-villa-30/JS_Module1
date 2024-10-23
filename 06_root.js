'use strict';
const calcular = confirm("Should I calculate the square root?");

if (calcular == true) {
  let num_str = prompt("Please give a number: ")
  const num = parseInt(num_str);
  let raiz = Math.sqrt(num)
  if (num < 0) {
    document.querySelector(
        '#root').innerHTML = "The square root of a negative number is not defined";
  } else {
    document.querySelector('#root').innerHTML = "Square root of " + num +
        " = " + raiz;
  }
  }

else {
    document.querySelector('#root').innerHTML = "The square root is not calculated.";

    }
