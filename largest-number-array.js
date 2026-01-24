// Write a function that returns the largest number in an array
function largestNumberInsideArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    let max = -Infinity;

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > max) {
            max = value;
        }
    }

    return max;
}
console.log(largestNumberInsideArray([3, 7, 2, 9, 1]));
