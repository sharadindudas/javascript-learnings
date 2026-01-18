// Write a function that finds all the factors of a given number
// Factor is a number that divides the given number evenly or exactly leaving no remainder
// 4 -> 1 2 4
// 14 -> 1 2 7 14
function factorsOfANumber(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (input <= 0 || !Number.isInteger(input)) {
        throw new Error("Please provide a positive integer");
    }

    const output = [];
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            output.push(i);
        }
    }

    return output;
}
console.log(factorsOfANumber(4));
console.log(factorsOfANumber(14));
console.log(factorsOfANumber(36));

function factorsOfANumberOptimized(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (input <= 0 || !Number.isInteger(input)) {
        throw new Error("Please provide a positive integer");
    }

    const output = [];
    for (let i = 1; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            output.push(i);

            const pair = input / i;
            if (pair !== i) {
                output.push(pair);
            }
        }
    }

    return output;
}
console.log(factorsOfANumberOptimized(4));
console.log(factorsOfANumberOptimized(14));
console.log(factorsOfANumberOptimized(36));
