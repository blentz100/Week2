// 2. Boolean Variables
let isHotOutside = true;
let isWeekday = false;
let hasMoneyInPocket = true;

// 3. Number Variables
let costOfMilk = 2;
let moneyInWallet = 10;
let thirstLevel = 5;

// 4. Scenario Variables
let shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
let willBuyMilk = isHotOutside && (thirstLevel >= 3) && (moneyInWallet >= (2 * costOfMilk));

// 5. Log Values to Console
console.log("shouldBuyIcecream is: " + shouldBuyIcecream);
console.log("willGoSwimming is: " + willGoSwimming);
console.log("isAGoodDay is: " + isAGoodDay);
console.log("willBuyMilk is: " + willBuyMilk);


