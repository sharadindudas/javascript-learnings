// Write a function that counts and prints the number of vowels and consonants in a given string
// function countVowelsAndConsonants(input) {
//     if (typeof input !== "string") {
//         throw new Error("Please provide a string");
//     }
//     input = input.toLowerCase();

//     const output = { vowels: 0, consonants: 0 };
//     const vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < input.length; i++) {
//         const char = input[i];
//         if (char >= "a" && char <= "z") {
//             if (vowels.includes(char)) output.vowels++;
//             else output.consonants++;
//         }
//     }
//     return output;
// }

// Better solution
function countVowelsAndConsonants(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }
    input = input.toLowerCase();

    const output = { vowels: 0, consonants: 0 };
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char >= "a" && char <= "z") {
            if (vowels.has(char)) output.vowels++;
            else output.consonants++;
        }
    }
    return output;
}
console.log(countVowelsAndConsonants("Hello world"));
console.log(countVowelsAndConsonants("12345"));
console.log(countVowelsAndConsonants("123"));
console.log(countVowelsAndConsonants("!!!"));
console.log(countVowelsAndConsonants(" "));
