'use strict';

let year1_str = prompt("Enter the first year")
let year2_str = prompt("Enter the second year: ")

let year1 = parseInt(year1_str);
const year2 = parseInt(year2_str);

const intervalList = document.querySelector('#interval');

while (year1 <= year2) {
  if ((year1 % 4 == 0 && year1 % 100 != 0) || (year1 % 400 == 0)) {

    let li = document.createElement('li');
    li.textContent = year1;
    intervalList.appendChild(li);
  }
  year1++;
}