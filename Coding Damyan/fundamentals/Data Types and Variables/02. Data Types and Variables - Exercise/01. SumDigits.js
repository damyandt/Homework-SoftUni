function sumDigits(input) {

    let numberAsString = input.toString();
    let sumOfAllDigits = 0;

    for(let i = 0; i < numberAsString.length; i++) {
        let currChar = Number(numberAsString[i]);
        sumOfAllDigits += currChar;
    }
    console.log(sumOfAllDigits)
}
sumDigits(23456)