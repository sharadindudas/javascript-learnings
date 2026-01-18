// Write a function that counts the frequency of the number of elements inside an array
function frequencyCounter(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    const output = new Map();
    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (!output.has(value)) {
            output.set(value, 1);
        } else {
            output.set(value, output.get(value) + 1);
        }
    }

    const result = {};
    for (let [key, value] of output) {
        result[key] = value;
    }
    return result;
}
console.log(frequencyCounter([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]));
console.log(frequencyCounter([]));
