// Write a function to check if a string is palindrome or not
function isStringPalindrome(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }

    const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    let output = "";
    for (let i = normalized.length - 1; i >= 0; i--) {
        output += normalized[i];
    }

    return output === normalized;
}
function isStringPalindrome2(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }
    const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = normalized.split("").reverse().join("");
    return normalized === reversedStr;
}
function isStringPalindrome3(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }
    const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0,
        right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isStringPalindrome("madam"));
console.log(isStringPalindrome("level"));
console.log(isStringPalindrome("Madam"));
console.log(isStringPalindrome("nurses run"));
