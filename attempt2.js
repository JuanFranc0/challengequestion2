function fib(seed1, seed2, numPos, neededNumber) {
    
    let [prev, next] =  [seed1, seed2];
    let fibSeq = [seed1];

   for (let i = 0; i < (numPos - 1); i++) {
     let temp = next;
     next = prev + next;
     prev = temp;
     fibSeq.push(prev);
    }
    
    if (fibSeq[4] === neededNumber) {

        console.log(`{${fibSeq[0]}, ${fibSeq[1]}}`);

    } else {
        return;
    }
}

for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {

         fib(i, j, 5, 100);

    }
}
