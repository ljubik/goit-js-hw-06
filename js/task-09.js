// 4.3 compute Consumer Price Index (CPI)
const stringBasket = '1 hamburger, 4 hotdog, 2 coke, 4 milk'  // YOU HAVE STRING
// {                                                          // VERY CONVENIENTLY TO GET OBJECT FROM STRING 
//   hamburger: 1,
//   hotdog: 4,
//   coke: 2,
//   milk: 4
// }

const data = { // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
  2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
  2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
  2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
};

const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 } // temporarily yearData

const parseBasket = (basket) => {
  const goods = basket.split(", ");
  const result = {};

  for (const good of goods) {
    const [count, name] = good.split(" ");

    result[name] = Number(count);
  }

  return result;
};

const basket = parseBasket(stringBasket);

const countYearBasket = (basket, year) => {
  const basketEntries = Object.entries(basket);
  let sum = 0;

  for (const basketEntry of basketEntries) {
    const [name, count] = basketEntry;
    const priceFromYear = year[name];

    sum += priceFromYear * count;
  }

  return sum;
};

console.log(countYearBasket(basket, yearData));

const getBasketPerYears = (basket, data) => {
  // write some code to get solution 
  // use existing functions
  // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
  // const prices = { 
  //     2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
  //     2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
  //     2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
  // }
}