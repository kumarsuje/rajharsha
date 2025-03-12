// 1️⃣ Variables and Data Types
let name = "John";  // String
const age = 25;     // Number
let isStudent = true; // Boolean

// 2️⃣ Functions
function greet(user) {
    return `Hello, ${user}!`;
}
console.log(greet(name)); // Output: Hello, John!

// 3️⃣ Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana

// 4️⃣ Objects
let person = {
    firstName: "Alice",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName); // Output: Alice

// 5️⃣ Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Prints each fruit
}

// 6️⃣ Conditions
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 7️⃣ Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// 8️⃣ Promises (Async Code)
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
};

fetchData().then(response => console.log(response)); // Output after 2s: Data received!
