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


function reverseArrayInPlace(array) {
    for (let n = 0 ; n < ( array.length - n ) ; n++){
        array.unshift(array[n * 2]);
    }
    array.length /= 2;
    return array;
}

console.log(reverseArrayInPlace(["A", "B", "C"]));

//More useful in more situation: 