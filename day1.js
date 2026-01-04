// Reverse a string

/*
    Input: "Hello"
    Output: "olleH"
    Steps: take a input (string) -> validate the input (empty/valid/remove spaces) -> loop the whole string starting from input's last index till it reaches the string's first index -> take those last elements and store it inside a new variable per iteration -> return the string
    Edge cases: Valid string or not, empty string or not, extra spaces in starting and ending of the string
*/

function reverseAString(input) {
    // Validation of data
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    // Loop and return the result
    let output = "";
    for (let i = trimmedInput.length - 1; i >= 0; i--) {
        output += trimmedInput[i];
    }
    return output;
}
console.log(reverseAString("Hello"));

function reverseAStringAdvanced(input) {
    // Validation of data
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    // Return the reversed string
    return trimmedInput.split("").reverse().join("");
}
console.log(reverseAStringAdvanced("Hello"));
