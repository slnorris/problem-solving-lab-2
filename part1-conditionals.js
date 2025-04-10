console.log("Hello World!")

//Grade Checker
//Print A, B, C, D, or F based on score
let score = 82;
if (score >= 90) {
    console.log("Score: A")
}
else if (score >= 80) {
   console.log("Score: B")
}
else if (score >= 70) {
   console.log("Score: C")
}
else if (score >= 60) {
   console.log("Score: D")
}
else if (score >= 50) {
    console.log("Score: F")
}
else if (score < 50) {
    console.log("Score: F")
}


//Pizza Quantity Warning
//Print warning if quantity > 10
let quantity = 12;
if (quantity > 10) {
    console.warn("Limit: 10 pizzas per order");
   // alert("Limit: 10 pizzas per order");
}
else if (quantity <= 10) {
    console.log("Order accepted: " + quantity + " pizzas");
} 
else if (quantity < 1) {
    console.warn("Minimum: 1 pizza per order");
    alert("You must select a number of pizzas");
}


//Login Simulator
//Print "Access Granted" or "Access Denied"
let password = "letmein";
if (password === "letmein") {
    console.log("Access Granted");
}
if (password !== "letmein") {
    console.warn("Access Denied: Incorrect Password");
   // alert("Incorrect Password")
}    