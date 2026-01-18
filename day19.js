// Write a function that calculates and returns the average of a set of numbers
function averageOfSetOfNumbers(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    let totalSum = 0;
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (!Number.isFinite(value)) {
            throw new Error("Array must have finite numbers");
        }

        totalSum += value;
    }

    return Number((totalSum / input.length).toFixed(2));
}
console.log(averageOfSetOfNumbers([1, 2, 3]));
console.log(averageOfSetOfNumbers([1, -2, -3]));
