'use strict';
const num1_str = prompt("Enter the first number: ");
const num2_str = prompt("Enter the second number: ");
const num3_str = prompt("Enter the third number: ");

const num1 = parseInt(num1_str);
const num2 = parseInt(num2_str);
const num3 = parseInt(num3_str);

let sum = num1 +  num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.querySelector('#suma').innerHTML = "Sum of the numbers is: " + sum;
document.querySelector('#producto').innerHTML = "Product of the numbers is: " + product;
document.querySelector('#promedio').innerHTML = "Average of the numbers is: " + average;
