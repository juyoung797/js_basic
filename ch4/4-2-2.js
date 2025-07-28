function applyTax(price, taxRate) {
  return price * (1+ taxRate);
}

const applyKoreanTax = (price) => applyTax(price, 0.1);
const prices = [10000, 20000, 30000];
const pricesWithTax = prices.map(applyKoreanTax);

console.log(pricesWithTax);