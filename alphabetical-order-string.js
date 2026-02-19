function alphabeticalOrder(input) {
    if (typeof input !== "string") throw new Error("Please provide a string");
    const str = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 1; i < str.length; i++) {
        if (str[i] < str[i - 1]) {
            return false;
        }
    }

    return true;
}
console.log(stringAlphabeticalOrder("abcdef"));
console.log(stringAlphabeticalOrder("adbef"));
