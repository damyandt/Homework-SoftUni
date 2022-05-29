function specialNumbers(n) {
    let currChar = "";
    let numWord = "";
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        currChar = i.toString()
       
        for (let b = 0; b < currChar.length; b++) {
            numWord = currChar[b]
            numWord = Number(numWord)
            sum += numWord
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${currChar} -> True`)
            } else { 
                console.log(`${currChar} -> False`)
            }
            sum = 0;
        }
    }
}
specialNumbers(15)