// Write a function that tells if a given number is even or odd
function checkIsEvenOrOdd(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }
    return input % 2 === 0 ? "Even" : "Odd";
}
console.log(checkIsEvenOrOdd(4));
console.log(checkIsEvenOrOdd(0));
console.log(checkIsEvenOrOdd(7));
