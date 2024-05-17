"use strict";

function min(a, b) {
    if(a < b) {
        return a;
    } else { return b;}
}

console.log(min(+prompt("Provide a number, 0"), prompt("Provide a second number", 0)));