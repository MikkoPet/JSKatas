"use script";

function range(start, end, step) {
    if( step === undefined ) {
        step = 1;
    }
    let range = [];
    let position = 0
    if (step > 0) {
    for (start; start <= end; start = start + step) {
        range[position++] = start;
    }
    return range;
    } else {
    for (start; start >= end; start = start + step) {
        range[position++] = start;
    }
    return range;
    }
} 

function sum(array) {
    let sum = 0;

    for (let n of array) {
        sum += array[n - 1];
    }
    return sum;
}

console.log(sum(range(1, 10))); 