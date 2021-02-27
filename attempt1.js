
function fibGen(num, neededNumber) {

    for (let i = 0; i < 1000; i++) {

        let seed1 = num;
        let seed2 = i;
        let seed3 = seed1 + seed2;
        let seed4 = seed2 + seed3;
        let seed5 = seed3 + seed4;
        
        if (seed5 === neededNumber) {
            console.log(`{${seed1}, ${seed2}}`);

        }
}
}


for (let i = 0; i < 1000; i++) {
    fibGen(i, 100)
}

