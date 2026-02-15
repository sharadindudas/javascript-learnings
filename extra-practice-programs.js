// Return all odd numbers from an array.
function oddNumbers(input) {
    if (!Array.isArray(input)) throw new Error("Please provide an array");

    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) {
            result.push(input[i]);
        }
    }
    return result;
}
console.log(oddNumbers([1, 2, 3, 4, 5]));

// Count numbers greater than 50 in an array.
function greaterThan50(input) {
    if (!Array.isArray(input)) throw new Error("Please provide an array");

    const result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 50) {
            result.push(input[i]);
        }
    }
    return result;
}
console.log(greaterThan50([1, 2, 3, 4, 5, 40, 80, 23]));

// Find the smallest number in an array.
function smallestNumber(input) {
    if (!Array.isArray(input)) throw new Error("Please provide an array");

    let min = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }
    }
    return min;
}
console.log(smallestNumber([1, 2, 3, 4, 5, 40, 80, 23]));

// Count vowels in a string.
function countVowels(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");

    const normalized = input.toLowerCase().replace(/[^0-9a-z]/g, "");

    let count = 0;
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    for (let i = 0; i < normalized.length; i++) {
        const char = normalized[i];
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Sharadindu Das"));

// Reverse a string (no built-in reverse).
function reverseAString(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");

    let temp = input,
        result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    return temp === result;
}
console.log(reverseAString("madam"));
