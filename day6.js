function addToTotal(total, x) {
    return total + x;
}
console.log(addToTotal(100, 30));

// Functions that:
// Return a number’s square
function square(x) {
    if (typeof x !== "number") return "Please provide a valid input";
    return x * x;
}
console.log(square(10));

// Return the larger of two numbers
function largestNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return null;
    return a > b ? a : b;
}
console.log(largestNumber(10, 20));

// Return a string’s length
function customStringLength(input) {
    if (typeof input !== "string") return "Please provide a valid input";
    return input.length;
}
console.log(customStringLength("Lol"));

function isEven(n) {
    if (typeof n !== "number") return "Please provide a valid input";
    return n % 2 === 0;
}
console.log(isEven(1));
