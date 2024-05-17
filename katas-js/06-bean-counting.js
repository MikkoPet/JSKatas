"use strict";

let getString = prompt("Please input a string of any characters", "BBC");
let getLetter = prompt("which letter do you want to count", "a")

/* function countBs(string) {
    let amountOfBs = 0;
    for (let n = 0; n < string.length; n++) {
        if ( string[n] === "B" ) {
            amountOfBs += 1;
        }
    }
    return amountOfBs;
}

console.log(countBs(getString)); */

function countChar(string, char) {
    let amountOfChar = 0;
    for (let n = 0; n < string.length; n++) {
        if ( string[n] === char ) {
            amountOfChar += 1;
        }
    }
    return amountOfChar;
}

console.log(countChar(getString, getLetter));
