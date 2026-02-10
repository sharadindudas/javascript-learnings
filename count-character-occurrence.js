// Write a function that counts the occurrences of each character in a given string
function countCharacterOccurrances(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");

    input = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const output = {};

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (output[char] !== undefined && output[char]) {
            output[char]++;
        } else {
            output[char] = 1;
        }
    }

    return output;
}
console.log(countCharacterOccurrances("Sharadindu Das"));

function countCharacterOccurrances2(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");

    input = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const result = input.split("").reduce((acc, curr) => {
        if (acc[curr] !== undefined && acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});
    return result;
}
console.log(countCharacterOccurrances2("Sharadindu Das"));
