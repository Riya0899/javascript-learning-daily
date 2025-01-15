// Singleton
// Object.create
// Declaring symbol and used as a key in the objects
const mysym = Symbol("mykey");

// Object literals
const user = {
    name: "riya",
    age: 21,
    email: "riya@gmail.com",
    [mysym]: "newkey", // Using symbol as key
    isloggedin: false
};

console.log(user.age);
console.log(user["email"]);
console.log(user[mysym]); // Accessing the symbol in the object

// Overwriting values in the object
// user.age = 22 // To change the values you can use = to overwrite the previous values
// Object.freeze(user) // To lock the value so that no one can change the values

// To add new functions to the object
user.greetings = function() {
    console.log("Hello to all");
};
console.log(user.greetings()); // Outputs: "Hello to all"

user.greetings2 = function() {
    console.log(`Hello to all, ${this.name}`);
};
console.log(user.greetings2()); // Outputs: "Hello to all, riya"

// Singleton pattern
// Types in which we can declare objects
const tinder = new Object();
tinder.id = 12;
tinder.name = "riya";
console.log(tinder);

// Declaring objects inside other objects
const user11 = {
    name: "riya",
    age: 21,
    second: {
        myname: "pritha"
    }
};
console.log(user11);

// Combining objects
const another = { 1: "a", 2: "b" };
const another2 = { 3: "a", 4: "b" };
const final = Object.assign({}, another, another2);
console.log(final); // Merged object

// Spread syntax to merge objects
const final2 = { ...another, ...another2 };
console.log(final2); // Merged object using spread

// Array of objects
const data = [
    {
        id: 1,
        name: "riya"
    },
    {
        id: 2,
        name: "pritha"
    },
    {
        id: 3,
        name: "kiran"
    }
];
console.log(data);

// Object methods: keys, values, entries
console.log(Object.keys(user11));   // ["name", "age", "second"]
console.log(Object.values(user11)); // ["riya", 21, { myname: "pritha" }]
console.log(Object.entries(user11)); // [["name", "riya"], ["age", 21], ["second", { myname: "pritha" }]]

console.log(user11.hasOwnProperty('name'));  // true (fixed typo: 'name ' → 'name')

// Destructuring objects
const course = {
    courseName: "js",
    price: 20000
};

const { courseName } = course; // Destructuring courseName from course
console.log(courseName); // Outputs: js

const { price: coursePrice } = course; // Destructuring price and renaming it to coursePrice
console.log(coursePrice); // Outputs: 20000

// JSON object (corrected to be a JavaScript object)
const userJson = {
    name: "riya",
    age: 21
};
console.log(userJson); // Outputs the user object
