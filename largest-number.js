// Write a function to find the largest number inside an array
function largestNumber(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
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
console.log(largestNumber([3, 7, 2, 9, 1]));
