//pyrvi nachin
function areaoffigure(input) {
  const type = input[0];
  let result = "";
  const a = Number(input[1]);
  if (type === "square") {
    result = a * a;
  } else if (type === "rectangle") {
    const b = Number(input[2]);
    result = a * b;
  } else if (type === "circle") {
    result = Math.PI * Math.pow(a, 2);
  } else {
    const b = Number(input[2]);
    result = (a * b) / 2;
  }
  console.log(result.toFixed(3));
}
areaoffigure(["triangle", "4.5", "20"]);

//vtori nachin
function areaoffigure(input) {
  const type = input[0];
  const a = Number(input[1]);
  if (type === "square") {
    const result = a * a;
    console.log(result.toFixed(3));
  } else if (type === "rectangle") {
    const b = Number(input[2]);
    const result = a * b;
    console.log(result.toFixed(3));
  } else if (type === "circle") {
    const result = Math.PI * Math.pow(a, 2);
    console.log(result.toFixed(3));
  } else {
    const b = Number(input[2]);
    const result = (a * b) / 2;
    console.log(result.toFixed(3));
  }
}
areaoffigure(["triangle", "4.5", "20"]);
