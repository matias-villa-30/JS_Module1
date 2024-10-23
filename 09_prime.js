'use strict';

let alkuluku_str = prompt("Give a number to check if its prime:");
let on_alkuluku = true;
let alkuluku = parseInt(alkuluku_str);


for (let i = 2; i <= Math.sqrt(alkuluku); i++) {
  if (alkuluku % i == 0) {
    on_alkuluku = false;

  }
}

if (on_alkuluku == true){
  document.querySelector('#prime').innerHTML = alkuluku + " is a prime number";
}
else{
  document.querySelector('#prime').innerHTML = alkuluku + " is not a prime number";
}
