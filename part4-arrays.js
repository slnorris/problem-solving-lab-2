// console.log("Hello World!")

// Problem 1: Favorite Foods

let favFoods = ["tacos", "sushi", "pizza", "pasta", "chicken"];
console.log(favFoods);

console.log(favFoods.at(0));

console.log(favFoods.at(4));

favFoods.push("Watermelon");

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

console.log(guestList.length);

// Problem 3: Weekend Tasks

let tasks = ["laundry", "groceries", "coding", "naps"];

function printTasks(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks [i]}`)
  }
}

printTasks(tasks)

// Problem 4: Reverse It (Manual)

let numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// Bonus: Random Picker

let lunches = [
  "sandwich",
  "salad",
  "burrito",
  "sushi",
  "soup",
  "pasta",
  "chicken",
];

function randomLunch(lunches) {
    let lunchToday = Math.floor(Math.random() * lunches.length);
    console.log(lunches[lunchToday])
}

randomLunch(lunches)
