function fib(seed1, seed2, neededPos, neededNumber ) {

    let [prev, next] =  [seed1, seed2];
    let fibSeq = [seed1];

   for (let i = 0; i < (numPos - 1); i++) {
     let temp = next;
     next = prev + next;
     prev = temp;
     fibSeq.push(prev);
    }
    
    if (fibSeq[neededPos - 1] === neededNumber) {

        console.log(`{${fibSeq[0]}, ${fibSeq[1]}}`);

    } else {
        return;
    }
}

function fibGen(numPos, neededNumber) {
    if ( !isNaN(numPos) && !isNaN(neededNumber)) {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
        
                 fib(i, j, numPos, neededNumber);
        
            }
        }
    } else {
        console.log('You gave invalid answers to the prompts. Please try again.')
    }
}

var numPos = parseInt(prompt('What position in the sequence do you want to find your number?'));
var neededNumber = parseInt(prompt(`What number do you want in the ${numPos}st/nd/rd/th position?`));

fibGen(numPos, neededNumber)

