// Write a function that counts and prints the number of vowels and consonants in a given string
function countVowelsAndConsonants(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const validInput = input.toLowerCase().replace(/[^a-z]/g, "");
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let vowelsCount = 0,
        consonantsCount = 0;

    for (let i = 0; i < validInput.length; i++) {
        const value = validInput[i];
        if (vowels.has(value)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }

    return {
        vowelsCount,
        consonantsCount,
    };
}
console.log(countVowelsAndConsonants("Hello world"));
console.log(countVowelsAndConsonants("12345"));
