function amazingNumbers(number) {
    let sum = 0;
    let sum2 = 0;
    number = number.toString();
    let bullFlag = false

    for (let i = 0; i < number.length; i++) {
        let currChar = number[i];
        currChar = Number(currChar);
        sum += currChar;
    }
    sum = sum.toString()

    
        for (let b = 0; b < sum.length; b++) {
            let currChar2 = sum[b];
            currChar2 = Number(currChar2);
           

            if (currChar2 == 9) {
                bullFlag = true
                break;
            } 
        }
    let isAmazing = bullFlag ? "True" : "False";

   
        console.log(`${number} Amazing? ${isAmazing}`)
    
}
amazingNumbers(1234)