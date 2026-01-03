// Count the number of characters inside the string

/*
    Input: "hello world"
    Output: { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }
    Steps: Valid string or not -> string is empty or not -> define a blank object -> loop through the string -> check if the character already exists inside the object or not if doesn't exists then add it with count 1 and if it exists then update the count
    Edge cases: Remove empty spaces between the string
*/

function countCharactersFromString(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    if (!input.length) {
        throw new Error("Input must not be empty");
    }

    const output = {};

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value === " ") {
            continue;
        }

        if (output[value] === undefined) {
            output[value] = 1;
        } else {
            output[value]++;
        }
    }

    return output;
}
console.log(countCharactersFromString("hello world"));
console.log(countCharactersFromString("hello world  "));
