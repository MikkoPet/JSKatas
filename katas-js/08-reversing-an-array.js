"use strict";

function reverseArray(array) {
    let newArray = [];
    for (let n of array) {
      newArray.push(array.pop());
      array.unshift(0);      
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

