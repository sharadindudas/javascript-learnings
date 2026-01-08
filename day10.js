// Frequency Counter

/*
    Input: [1, 2, 2, 3, 3, 3]
    Output: { 1:1, 2:2, 3:3 }
    Steps: Validation of input -> Initialize a map data structure based output variable -> loop through the array elements -> check if the array element already exists inside the map or not -> if it doesn't exists push it to the map else just get the current count and update it -> return the output
    Edge cases: Validation of array, array elements finite numbers or not
*/

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
