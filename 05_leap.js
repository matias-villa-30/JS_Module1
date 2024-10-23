'use strict';
const vuosi_str = prompt("Enter a year to check if its a leap year: ");
let vuosi = parseInt(vuosi_str);

if ((vuosi % 4 == 0 && vuosi % 100 != 0) || (vuosi % 400 == 0)){
  document.querySelector('#vuosi').innerHTML = vuosi_str + " is a leap year";

} else {
    document.querySelector('#vuosi').innerHTML = vuosi_str + " is not a leap year";

}
