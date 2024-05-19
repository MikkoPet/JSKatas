"use strict";

function reverseArray(array) {

    let newArray = [];

    for (let n = 0 ; n < array.length ; n++) {

        let targetValue = array.length - 1 - n;

        let valueSwapper = array[targetValue];
        newArray.push(valueSwapper);
    }

    return newArray;
}


function reverseArrayInPlace(array) {

    for (let n = 0 ; n < array.length ; n++){

        let targetValue = array.length - 1 - n ;
        let valueSwapper = array[targetValue];

        array.splice(targetValue, 1);
        array.push(valueSwapper);
    }

    return array;
}

let testArray = ["A", "B", "C", "D", "E"];

console.log(reverseArray(testArray));
console.log(reverseArrayInPlace(testArray));


//the capacity for the first function to keep the original array alongside
//the reversed array makes it more versatile
//as we can use it in situations where we need only the reversed array
//as well as situations where we need the original AND reversed array
//whereas reverseInPlace in this function fundamentally changes the original array
