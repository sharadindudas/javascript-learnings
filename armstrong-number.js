// Write a function that checks if a number is armstrong number or not
// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 (true)
// 370 -> 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370 (true)
// 243 -> 2^3 + 4^3 + 3^3 = 8 + 64 + 27 = 99 (false)

function isArmstrongNumber(input) {
    if (typeof input !== "number") {
        throw new Error("Please provide a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Please provide a valid number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Please provide a non-negative integer");
    }

    if (input === 0) return true;

    const numberToString = input.toString();

    let sum = 0;
    for (let i = 0; i < numberToString.length; i++) {
        const value = Number(numberToString[i]);
        sum += value ** numberToString.length;
    }

    return sum === input;
}
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(370));
console.log(isArmstrongNumber(243));

function isArmstrongNumber2(input) {
    if (typeof input !== "number") {
        throw new Error("Please provide a number");
    }

    if (!Number.isFinite(input)) {
        throw new Error("Please provide a valid number");
    }

    if (!Number.isInteger(input) || input < 0) {
        throw new Error("Please provide a non-negative integer");
    }

    let digits = [],
        temp = input;

    if (input === 0) {
        digits.push(0);
    }

    while (temp > 0) {
        digits.push(temp % 10);
        temp = Math.floor(temp / 10);
    }

    let sum = 0;
    digits.forEach((d) => {
        sum += d ** digits.length;
    });

    return sum === input;
}
console.log(isArmstrongNumber2(153));
console.log(isArmstrongNumber2(370));
console.log(isArmstrongNumber2(243));
console.log(isArmstrongNumber2(0));

function isArmstrongNumber3(input) {
    if (typeof input !== "number" || !Number.isInteger(input)) {
        throw new Error("Please provide a positive number");
    }

    let output = 0,
        temp = input;
    const digits = input.toString().length;

    while (input > 0) {
        output += Math.pow(input % 10, digits);
        input = Math.floor(input / 10);
    }
    return temp === output;
}
console.log(isArmstrongNumber3(153));
console.log(isArmstrongNumber3(370));
console.log(isArmstrongNumber3(243));
console.log(isArmstrongNumber3(0));
