function number100to200(input) {
  const number = Number(input[0]);
  let result = "";
  if (number < 100) {
    result = "Less than 100";
  } else if (number > 200) {
    result = "Greater than 200";
  } else {
    result = "Between 100 and 200";
  }
  console.log(result);
}
number100to200(["1200"]);
