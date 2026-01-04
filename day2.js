// Count Characters

/*
    Input: "aab"
    Output: { a: 2, b: 1 }
    Steps: Take the input -> validate the input (valid input / empty input / remove spaces from start and end) -> loop through the string -> define an empty object and check if the input element's character exists inside the object or not if it doesn't exists add it with a count 1 and if already exists just increase the already existing count -> return the object  
    Edge cases: Valid string / Empty string / Remove trailing spaces from start and end
*/

function countCharacters(input) {
    // Validation of data
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    // Loop and return the result
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
    // Validation of data
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
