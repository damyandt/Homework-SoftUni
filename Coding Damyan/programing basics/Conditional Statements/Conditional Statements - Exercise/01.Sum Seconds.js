function sumseconds(input) {
  const time1 = Number(input[0]);
  const time2 = Number(input[1]);
  const time3 = Number(input[2]);
  const totaltime = time1 + time2 + time3;
  let minutes = 0;
  let seconds = 0;
  if (totaltime >= 120) {
    minutes = 2;
    seconds = totaltime - 120;
  } else if (totaltime >= 60) {
    minutes = 1;
    seconds = totaltime - 60;
  } else {
    minutes = 0;
    seconds = totaltime;
  }
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
sumseconds(["22", "7", "34"]);
