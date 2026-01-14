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

// Write a function that finds and prints the smallest number among three given numbers
function findSmallestNumber(...input) {
    let smallestNumber = Infinity;

    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("All inputs must be finite numbers");
        }

        if (value < smallestNumber) {
            smallestNumber = value;
        }
    }
    return smallestNumber;
}
console.log(findSmallestNumber(4, 6, 2));
console.log(findSmallestNumber(4, 6, 2, 5, 7, 1));

// Write a function that returns the reverse of a string
function reverseAString(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    let output = "";
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    return output;
}
console.log(reverseAString(""));
console.log(reverseAString("Remo"));
console.log(reverseAString("Teacher"));
console.log(reverseAString("Lolll"));

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
