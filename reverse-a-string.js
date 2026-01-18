// Write a function that reverses a string
function reverseAString(input) {
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    let output = "";
    for (let i = trimmedInput.length - 1; i >= 0; i--) {
        output += trimmedInput[i];
    }
    return output;
}
console.log(reverseAString("Hello"));

function reverseAStringAdvanced(input) {
    if (typeof input !== "string")
        throw new Error("Please provide a valid input");
    const trimmedInput = input.trim();
    if (trimmedInput.length === 0) throw new Error("Input must not be empty");

    return trimmedInput.split("").reverse().join("");
}
console.log(reverseAStringAdvanced("Hello"));
