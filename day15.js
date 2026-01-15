// Write a function that finds and prints the largest number from an array
function getLargestNumber(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    let largestNumber = -Infinity;
    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > largestNumber) {
            largestNumber = value;
        }
    }
    return largestNumber;
}
console.log(getLargestNumber([1, 5, 6, 3]));

// Write a function to check if a string is palindrome or not
function isStringPalindrome(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }

    const modifiedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    const copiedStr = modifiedInput;
    let output = "";
    for (let i = modifiedInput.length - 1; i >= 0; i--) {
        output += modifiedInput[i];
    }

    console.log(output, copiedStr);
    return output === copiedStr;
}
console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("level"));
console.log(isStringPalindrome("asd"));
console.log(isStringPalindrome("Madam"));
console.log(isStringPalindrome("nurses run"));
