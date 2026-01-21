// Write a function that counts and returns the number of words in a sentence
function countWordsInSentence(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }

    const str = input.trim();
    if (!str.length) return 0;

    let count = 0;
    let inWord = false;
    for (let i = 0; i < str.length; i++) {
        const value = str[i];
        if (value !== " " && !inWord) {
            count++;
            inWord = true;
        }
        if (value === " ") {
            inWord = false;
        }
    }
    return count;
}
console.log(countWordsInSentence("This is a sentence"));
console.log(countWordsInSentence("What is the date today"));

function countWordsInSentenceJSWay(input) {
    if (typeof input !== "string") {
        throw new Error("Please provide a string");
    }

    const str = input.trim();

    return str.split(" ").filter((element) => element !== "").length;
}
console.log(countWordsInSentenceJSWay("This is a sentence"));
console.log(countWordsInSentenceJSWay("What is the date today"));
console.log(countWordsInSentenceJSWay("What is       the date          today"));
console.log(
    countWordsInSentenceJSWay("      What is       the date          today")
);
