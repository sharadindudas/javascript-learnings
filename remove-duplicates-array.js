// Write a function that remove the duplicates from the array
function removeDuplicates(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
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
console.log(removeDuplicates([]));

function removeDuplicatesAdvanced(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
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
