function bonusscore(input) {
  const points = Number(input[0]);
  let bunuspoints = 0;

  if (points <= 100) {
    bonuspoints = 5;
  } else if ((points > 100 && points <= 1000)) {
    bonuspoints = points * 0.2;
  } else {
    bonuspoints = points * 0.1;
  }
  if (points % 2 === 0) {
    bonuspoints += 1;
  } else if (points % 10 === 5) {
    bonuspoints += 2;
  } else {
    bonuspoints = bonuspoints;
  }
  console.log(bonuspoints);
  console.log(points + bonuspoints);
}
bonusscore(["20"]);
