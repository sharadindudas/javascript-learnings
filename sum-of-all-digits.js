// Write a function that calculates the sum of digits of a given number
function sumOfAllDigits(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Input must be a finite number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Input must be a positive integer");
    }

    let totalSum = 0;
    const inputAsString = input.toString();
    for (let i = 0; i < inputAsString.length; i++) {
        totalSum += +inputAsString[i];
    }
    return totalSum;
}
console.log(sumOfAllDigits(123));

function sumOfAllDigitsAdvanced(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Input must be a finite number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Input must be a positive integer");
    }

    return input
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfAllDigitsAdvanced(123));

function sumOfAllDigitsMath(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Input must be a finite number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Input must be a positive integer");
    }

    input = Math.abs(Math.floor(input));

    let sum = 0;
    while (input > 0) {
        let digit = input % 10;
        sum += digit;
        input = Math.floor(input / 10);
    }
    return sum;
}
console.log(sumOfAllDigitsMath(123));
