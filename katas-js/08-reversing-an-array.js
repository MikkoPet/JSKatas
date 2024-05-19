"use strict";

function reverseArray(array) {
    let newArray = [];
    let oldArray= [];

    for (let n in array) {
        oldArray[n] = array[n];
    }

    for (let n of array) {
        let valueSwapper = oldArray.pop();
        newArray.push(valueSwapper);
    }

    return newArray;
}



function reverseArrayInPlace(array) {

    for (let n = 0 ; n < array.length ; n++){

        let valueSwapper = array[n];
        
        array.splice(n, 1);
        array.unshift(valueSwapper);
    }

    return array;
}

let testArray = ["A", "B", "C", "D", "E"];

console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));