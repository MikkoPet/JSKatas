function josephus(n, k) {
    let killingSpotThisRound = k - 1; //-1 accounts for array keys starting at 0, not 1
    let remainingPrisoners = [];

    for (let i = 0; i <= n; i++) {
        remainingPrisoners[i] = i + 1; //at spot 0 stands prisonner1
    }

    while(remainingPrisoners.length != 1) {
        remainingPrisoners.splice( killingSpotThisRound % remainingPrisoners.length, 1 );
        killingSpotThisRound += k;
    }
    return remainingPrisoners;
}

josephus(5, 3);
josephus(6, 2);
josephus(7, 2);
josephus(8, 2);

// create array containing n amount of values
// in while arr.splice[killingSpotThisRound % arr.length] then killingSpotThisRound += k