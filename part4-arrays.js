// console.log("Hello World!")

// Problem 1: Favorite Foods

let favFoods = ["tacos", "sushi", "pizza", "pasta", "chicken"];
console.log(favFoods);

let firstFood = favFoods.at(0);
console.log(firstFood);

let lastFood = favFoods.at(4);
console.log(lastFood);

let length = favFoods.push("Watermelon");
console.log(favFoods);

// Problem 2: Guest List

let guestList = [
  "Frank",
  "Monica",
  "Fiona",
  "Phillip",
  "Ian",
  "Debbie",
  "Carl",
  "Liam",
  "Veronica",
  "Kevin",
  "Mickey",
];

guestList.shift();

guestList.push("Karen");

console.log(guestList);

let guestTotal = guestList.length;

console.log(guestTotal);
