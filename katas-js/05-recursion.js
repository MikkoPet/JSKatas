"use strict";

let getNumberIsEven = +prompt("Input any number to check for evenness", 50);

//allow for negative numbers
if ( getNumberIsEven < 0) {
    getNumberIsEven *= -1;
}

function recursiveCheckForEven(number) {
   if(number <= 0){
    console.log(number == 0)
    return;
   }
   number -= 2;
   recursiveCheckForEven( number );
}

recursiveCheckForEven( getNumberIsEven );
