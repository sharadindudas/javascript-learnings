// Write a function that reverses an array
function reverseArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    const output = [];

    for (let i = input.length - 1; i >= 0; i--) {
        output.push(input[i]);
    }

    return output;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
