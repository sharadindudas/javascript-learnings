// Write a function that returns the number of negative numbers in an array
function countNegativeNumbersInsideArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array");
    }
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }
        if (value < 0) count++;
    }
    return count;
}
console.log(countNegativeNumbersInsideArray([1, 32, 53, 11, -6]));
console.log(countNegativeNumbersInsideArray([1, 32, -3, 11, -6, -23]));
