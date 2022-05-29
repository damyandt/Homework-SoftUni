function workinghours(input) {
  const hours = Number(input[0]);
  const day = input[1];

  if (hours >= 10 && hours <= 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      default: console.log("closed")
    }
  } else {
    console.log("closed");
  }
}
workinghours(["11", "Sunday"]);
