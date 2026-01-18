// Write a function that calculates the max, min and sum of the array elements
function getMaxMinSum(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }
    if (!input.length) {
        throw new Error("Input must not be empty");
    }

    let max = -Infinity,
        min = Infinity,
        sum = 0;

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > max) {
            max = value;
        }

        if (value < min) {
            min = value;
        }

        sum += value;
    }

    return { max, min, sum };
}
console.log(getMaxMinSum([3, 1, 4, 1, 5]));
