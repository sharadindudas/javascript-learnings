// Write a function that counts the number of characters from a string
function countCharacters(input) {
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    const output = {};
    for (let i = 0; i < trimmedInput.length; i++) {
        if (output[trimmedInput[i]] === undefined) {
            output[trimmedInput[i]] = 1;
        } else {
            output[trimmedInput[i]]++;
        }
    }
    return output;
}
console.log(countCharacters("aab"));

function countCharactersAdvanced(input) {
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");

    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    const result = Array.from(trimmedInput).reduce((prev, curr) => {
        if (prev[curr] === undefined) {
            prev[curr] = 1;
        } else {
            prev[curr]++;
        }
        return prev;
    }, {});
    return result;
}
console.log(countCharactersAdvanced("aab"));
