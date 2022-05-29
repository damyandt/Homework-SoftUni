function spiceMustFlow(startYield) {

    let daysCounter = 0;
    let spicesExtracted = 0;

    while (startYield >= 100) {
        daysCounter++;
        spicesExtracted += startYield - 26;
        startYield -= 10;

    }
    console.log(daysCounter);
    console.log(spicesExtracted - 26);
    
}
spiceMustFlow(111)