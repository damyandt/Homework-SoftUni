function rightPlace(firstWord, char, secondWord) {


    let res = ""

    for (let i = 0; i < firstWord.length; i++) {
        let currChar = firstWord[i];
        if (currChar == "_") {
            res += char;
        } else {
            res += currChar;
        }
    }
    if (res === secondWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'o', 'Strong')