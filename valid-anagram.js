// Write a program to check if two strings are anagrams
function isValidAnagram(input1, input2) {
    if (typeof input1 !== "string" || typeof input2 !== "string") {
        throw new Error("Please provide the strings");
    }
    const str1 = input1.toLowerCase().replace(/[^a-z0-9]/g, ""),
        str2 = input2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (str1.length !== str2.length) return false;

    const freq = {};
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (!freq[char]) {
            freq[char] = 1;
        } else {
            freq[char]++;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!freq[char]) {
            return false;
        } else {
            freq[char]--;
        }
    }

    return true;
}
console.log(isValidAnagram("anagram", "nagaram"));
console.log(isValidAnagram("rat", "car"));
