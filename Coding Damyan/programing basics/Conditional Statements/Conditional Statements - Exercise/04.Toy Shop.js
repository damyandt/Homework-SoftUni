function toyshop(input) {
  const puzzel = 2.6;
  const talkingdoll = 3;
  const teddybear = 4.1;
  const minion = 8.2;
  const truck = 2;

  const urlaubprise = Number(input[0]);
  const puzzelcount = Number(input[1]);
  const talkingdollcount = Number(input[2]);
  const teddybearcount = Number(input[3]);
  const minioncount = Number(input[4]);
  const truckcount = Number(input[5]);

let totalprice = puzzel * puzzelcount +
talkingdoll * talkingdollcount +
teddybear * teddybearcount +
minion * minioncount +
truck * truckcount;
const totalcount = puzzelcount + talkingdollcount + teddybearcount + minioncount + truckcount;

if (totalcount >= 50) {
    totalprice *= 0.75;
}
totalprice *= 0.9;
const leftmoney = Math.abs(totalprice - urlaubprise);

if (totalprice > urlaubprise) {
  console.log(`Yes! ${leftmoney.toFixed(2)} lv left.`)
} else {
   console.log(`Not enough money! ${leftmoney.toFixed(2)} lv needed.`)
}

}
 toyshop(["40.8", "20", "25", "30", "50", "10"]);
// function toyStore(input) {
//     const puzzlePrice = 2.6;
//     const talkingDollPrice = 3;
//     const teddyBearPrice = 4.1;
//     const minionPrice = 8.2;
//     const truckPrice = 2;
   
//     const vacationPrice = Number(input[0]);
//     const numberOfPuzzles = Number(input[1]);
//     const numberOfTalkingDolls = Number(input[2]);
//     const numberOfTeddyBears = Number(input[3]);
//     const numberOfMinions = Number(input[4]);
//     const numberOfTrucks = Number(input[5]);
   
//     const toyCount =
//       numberOfMinions +
//       numberOfPuzzles +
//       numberOfTalkingDolls +
//       numberOfTeddyBears +
//       numberOfTrucks;
//     let totalCost =
//       numberOfPuzzles * puzzlePrice +
//       numberOfTalkingDolls * talkingDollPrice +
//       numberOfTeddyBears * teddyBearPrice +
//       numberOfTrucks * truckPrice +
//       numberOfMinions * minionPrice;
   
//     if (toyCount >= 50) {
//       //  totalCost = totalCost * 0.75;
//       totalCost *= 0.75;
//     }
//     totalCost *= 0.9;
   
//     const difference = Math.abs(totalCost - vacationPrice); // -25 => 25 (връща положителната стойност на отрицателно число)
   
//     if (totalCost >= vacationPrice) {
//       console.log(`Yes! ${difference.toFixed(2)} lv left.`);
//     } else {
//       console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
//     }
//   }