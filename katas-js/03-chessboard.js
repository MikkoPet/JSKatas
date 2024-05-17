"use strict";

let width = prompt("What width should the checkerboard be?", 8);
let height = prompt("What height should the checkerboard be?", 8);
let checkerboard = "\n";

for (let i = 0; i < height; i++) {

    let checkerboardLine = ""
    if (i % 2 === 0) {
        for (let j = 0; j < width; j++) {

            if (j % 2 === 0) {
                checkerboardLine += " ";
            } else {
                checkerboardLine += "#";
            }
        }
    } else {
        for (let j = 0; j < width; j++) {

            if (j % 2 === 1) {
                checkerboardLine += " ";
            } else {
                checkerboardLine += "#";
            }
        }
    }

    checkerboard += checkerboardLine + "\n";
}

console.log(checkerboard + "\n");