function fib(neededPos, neededNumber ) {
    if ( !isNaN(neededPos) && !isNaN(neededNumber)) {
        for (let i = 0; i < 5000; i++) {
            for (let j = 0; j < 5000; j++) {

                let [prev, next] =  [i, j];
                let fibSeq = [i];
            
               for (let h = 0; h < (neededPos - 1); h++) {

                    let temp = next;
                    next = prev + next;
                     prev = temp;
                     fibSeq.push(prev);

                }
                
                if (fibSeq[neededPos - 1] === neededNumber) {
            
                    console.log(`{${fibSeq[0]}, ${fibSeq[1]}}`);
            
                } 
        
            }
        }
    } else {
      return console.log('You gave invalid answers to the prompts. Please try again.');
        
    }

}

var numPos = parseInt(prompt('What position in the sequence do you want to find your number?'));
var neededNumber = parseInt(prompt(`What number do you want in the ${numPos}st/nd/rd/th position?`));

fib(numPos, neededNumber);
