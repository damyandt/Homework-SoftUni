function smallShop(input) {
  const product = input[0];
  const town = input[1];
  const qunatity = Number(input[2]);
  let price = 0;

  switch (town) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = qunatity * 0.5;
          break;
        case "water":
          price = qunatity * 0.8;
          break;
        case "beer":
          price = qunatity * 1.2;
          break;
        case "sweets":
          price = qunatity * 1.45;
          break;
        case "peanuts":
          price = qunatity * 1.6;
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = qunatity * 0.4;
          break;
        case "water":
          price = qunatity * 0.7;
          break;
        case "beer":
          price = qunatity * 1.15;
          break;
        case "sweets":
          price = qunatity * 1.3;
          break;
        case "peanuts":
          price = qunatity * 1.5;
          break;
      }

      break;
    case "Varna":
      switch (product) {
        case "coffee":
          price = qunatity * 0.45;
          break;
        case "water":
          price = qunatity * 0.7;
          break;
        case "beer":
          price = qunatity * 1.1;
          break;
        case "sweets":
          price = qunatity * 1.35;
          break;
        case "peanuts":
          price = qunatity * 1.55;
          break;
      }
      break;
  }
  console.log(price);
}
smallShop(["beer", "Sofia", "6"]);
