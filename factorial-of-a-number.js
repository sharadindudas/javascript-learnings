// Write a function to calculate the factorial of a given number
function factorialOfANumber(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Input must be a finite number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Input must be a positive integer");
    }

    let output = 1;

    for (let i = 1; i <= input; i++) {
        output *= i;
    }
    return output;
}
console.log(factorialOfANumber(5));

// Write a function to calculate factorial of a given number using recursion
function factorialOfANumberUsingRecursion(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Input must be a finite number");
    }

    if (!Number.isInteger(input)) {
        throw new Error("Input must be an integer");
    }

    if (input < 0) {
        throw new Error("Input must be a positive number");
    }

    if (input === 0 || input === 1) {
        return 1;
    } else {
        return input * factorialOfANumberUsingRecursion(input - 1);
    }
}
console.log(factorialOfANumberUsingRecursion(5));
