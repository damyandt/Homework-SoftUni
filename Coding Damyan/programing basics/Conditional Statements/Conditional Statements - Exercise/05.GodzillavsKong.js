function godzillavsKong(input) {
    const movievalue = Number(input[0]);
    const statisticount = Number(input[1]);
    let priceforclothingperstatist = Number(input[2]);
    const dekor = movievalue * 0.1;
    let priceforclothing = statisticount * priceforclothingperstatist;
    if (statisticount > 150) {
      priceforclothing *= 0.9;
    }
    const totalmoney = dekor + priceforclothing;
  
    if (totalmoney > movievalue) {
      let neededmoremoney = totalmoney - movievalue;
      console.log("Not enough money!");
      console.log(`Wingard needs ${neededmoremoney.toFixed(2)} leva more.`);
    } else {
      let moneyleft = movievalue - totalmoney;
      console.log("Action!");
      console.log(
        `Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`
      );
    }
  }
  godzillavsKong(["15437.62", "186", "57.99"])
  
  
  