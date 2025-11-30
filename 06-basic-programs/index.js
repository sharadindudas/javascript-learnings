// Problem 1 — Implement your own map function
function myMap(arr, callback) {
    if (!Array.isArray(arr)) throw new Error("Please provide an array");
    if (arr.length === 0) return [];
    if (typeof callback !== "function")
        throw new Error("Please provide the callback function");
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(callback(arr[i], i, arr));
    }
    return output;
}
// console.log(myMap([1, 2, 3], (x) => x * 2)); // [2,4,6]

// Problem 2 — Reverse a string (no built-ins like split/reverse/join)
function reverseAString(input) {
    if (typeof input !== "string") throw new Error("Input must be a string");
    if (!input) throw new Error("Please provide the input");

    let output = "";
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    return output;
}
// console.log(reverseAString("Remo")); // omeR

// Problem 3 — Flatten an array (one level only)
function flatten(arr) {
    if (!Array.isArray(arr)) throw new Error("Please provide an array");
    if (arr.length === 0) return [];

    const output = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            item.forEach((innerItem) => output.push(innerItem));
        } else {
            output.push(item);
        }
    }
    return output;
}
// console.log(flatten([1, [2, 3], 4])); // [1,2,3,4]
