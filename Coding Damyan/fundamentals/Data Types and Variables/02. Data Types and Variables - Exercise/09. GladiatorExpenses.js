function galdiatorExpenses(lostFights, helmetPrice, swordPrice, SchieldPrice, armorPrice) {

    let expenses = 0;
    let lostFightsCounter = 0;
    let schieldBrokeCounter = 0;

    for (let currFight = 1; currFight <= lostFights; currFight++) {
        lostFightsCounter++;
        if (lostFightsCounter % 2 === 0) {
            expenses += helmetPrice;
        }
        if (lostFightsCounter % 3 === 0) {
            expenses += swordPrice;
        }
        if (lostFightsCounter % 6 === 0) {
            expenses += SchieldPrice;
            schieldBrokeCounter++;
            if (schieldBrokeCounter % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}
galdiatorExpenses(7, 2, 3, 4, 5);