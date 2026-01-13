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
function findSmallestNumber(...inputs) {
    let smallestNumber = Infinity;

    for (let i = 0; i < inputs.length; i++) {
        const value = inputs[i];

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

console.log(reverseAString("Remo"))
console.log(reverseAString("Teacher"))
console.log(reverseAString("Lolll"))