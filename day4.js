// Remove Duplicates

/*
    Input: [1, 2, 2, 3, 1]
    Output: [1, 2, 3]
    Steps: Take array as input -> validate the data -> loop over the array elements -> initialize a blank array holding variable -> if the current array element is already inside the new array then don't push it else push it inside the new array -> return the new array  
    Edge cases: valid array or not, empty array, if the elements inside the array is finite numbers or not
*/

function removeDuplicates(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    const output = [];
    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (!output.includes(value)) {
            output.push(value);
        }
    }
    return output;
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));

function removeDuplicatesAdvanced(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    const seen = new Set();
    const output = [];
    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (!seen.has(value)) {
            seen.add(value);
            output.push(value);
        }
    }
    return output;
}
console.log(removeDuplicatesAdvanced([1, 2, 2, 3, 1]));
