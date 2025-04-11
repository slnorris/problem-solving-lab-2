console.log("Hello World!");

//1. Dog Age Converter

function dogToHumanYears(dogAge) {
  let humanDogAge = dogAge * 7;
  return humanDogAge;
}

console.log(dogToHumanYears(9));
console.log(dogToHumanYears(2));
console.log(dogToHumanYears(6));

//2. Tip Calculator

function calculateTip(total, percentage) {
  let tipAmount = total * percentage;
  return tipAmount;
}

console.log(calculateTip(40, 0.2));
console.log(calculateTip(100, 0.2));

//I wanted to come here and say that I looked up how to format the "tipAmount" return as a currency and OH MY GOD. So, yea, just pretend there's a dollar sign and decimal there. Thanks!

//3. Even or Odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(2456));
console.log(checkEvenOdd(7777));
