function fruitShop(input) {
  const type = input[0];
  const day = input[1];
  const qunatity = Number(input[2]);

  if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      switch(type) {
        case "banana": console.log((qunatity * 2.5).toFixed(2)); break;
        case "apple": console.log((qunatity * 1.20).toFixed(2)); break;
        case "orange": console.log((qunatity * 0.85).toFixed(2)); break;
        case "grapefruit": console.log((qunatity * 1.45).toFixed(2)); break;
        case "kiwi": console.log((qunatity * 2.7).toFixed(2)); break;
        case "pineapple": console.log((qunatity * 5.5).toFixed(2)); break;
        case "grapes": console.log((qunatity * 3.85).toFixed(2)); break;
        default: console.log("error");
      } 
  } else if(day === "Saturday" || day === "Sunday") {
    switch(type) {
        case "banana": console.log((qunatity * 2.7).toFixed(2)); break;
        case "apple": console.log((qunatity * 1.25).toFixed(2)); break;
        case "orange": console.log((qunatity * 0.9).toFixed(2)); break;
        case "grapefruit": console.log((qunatity * 1.6).toFixed(2)); break;
        case "kiwi": console.log((qunatity * 3).toFixed(2)); break;
        case "pineapple": console.log((qunatity * 5.6).toFixed(2)); break;
        case "grapes": console.log((qunatity * 4.2).toFixed(2)); break;
        default: console.log("error");
  }

  } else {
      console.log("error")
  }
}

fruitShop(["orange",
"Sunday",
"3"])

