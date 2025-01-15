console.log(1 > 2);  // false
console.log(1 >= 2);  // false
console.log(1 == 2);  // false
console.log(1 <= 2);  // true
console.log(1 != 2);  // true
// Simple comparison between numbers

console.log("1" > 2);  // true (string "1" is coerced to number 1, and 1 > 2 is false)

console.log(null > 0);  // false (null is coerced to 0, and 0 > 0 is false)
console.log(null == 0); // false (null is not equal to 0, because null only equals null or undefined with ==)
console.log(null < 0);  // false (null is coerced to 0, and 0 < 0 is false)
console.log(null >= 0); // true (null is coerced to 0, and 0 >= 0 is true)

// Strict check => checks datatype also, no conversion is done
console.log("1" === 2);  // false (string "1" is not equal to number 2, types are different)
