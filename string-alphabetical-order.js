// Write a program to check if a given string is in alphabetical order or not
function stringAlphabeticalOrder(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");

    input = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 1; i < input.length; i++) {
        if (input[i] < input[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(stringAlphabeticalOrder("abcdef"));
console.log(stringAlphabeticalOrder("adbef"));
