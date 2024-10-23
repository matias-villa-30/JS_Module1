'use strict';
const name = prompt("Enter your name to be assigned to a Hogwarts school: ");
let num = Math.floor(Math.random()*4+1);
if (num == 1){
  document.querySelector('#grif').innerHTML = name + ", you are Gryffindor.";

} else if (num == 2){
    document.querySelector('#sli').innerHTML = name + ", you are Slytherin.";

}
 else if (num == 3){
    document.querySelector('#huf').innerHTML = name + ", you are Hufflepuff.";

} else if (num == 4){
    document.querySelector('#rav').innerHTML = name + ", you are Ravenclaw.";

}