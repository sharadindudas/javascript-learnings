// Write a program to find first non repeating character
function firstNonRepeatingCharacter(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");
    const output = {};

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!output[char]) {
            output[char] = 1;
        } else {
            output[char]++;
        }
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (output[char] === 1) {
            return char;
        }
    }

    return -1;
}
console.log(firstNonRepeatingCharacter("leetcode"));
console.log(firstNonRepeatingCharacter("aabbccddeffg"));
