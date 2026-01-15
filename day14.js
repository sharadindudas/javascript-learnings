// Write a function to generate and print multiplication table for a given number upto the specified range
function generateMultiplicationTable(input, range) {
    if (typeof input !== "number" || typeof range !== "number") {
        throw new Error("Input and range must be a number");
    }

    if (!Number.isFinite(input) || !Number.isFinite(range)) {
        throw new Error("Input and range must be finite numbers");
    }

    if (!Number.isInteger(input) || input <= 0) {
        throw new Error("Input must be a positive integer");
    }

    if (!Number.isInteger(range) || range <= 0) {
        throw new Error("Range must be a positive integer");
    }

    let output = "";
    for (let i = 1; i <= range; i++) {
        output += `${input} * ${i} = ${input * i}\n`;
    }
    return output;
}
console.log(generateMultiplicationTable(5, 10));
console.log(generateMultiplicationTable(8, 10));

function generateMultiplicationTableAdvanced(input, range) {
    if (typeof input !== "number" || typeof range !== "number") {
        throw new Error("Input and range must be a number");
    }

    if (!Number.isFinite(input) || !Number.isFinite(range)) {
        throw new Error("Input and range must be finite numbers");
    }

    if (!Number.isInteger(input) || input <= 0) {
        throw new Error("Input must be a positive integer");
    }

    if (!Number.isInteger(range) || range <= 0) {
        throw new Error("Range must be a positive integer");
    }

    let output = [];
    for (let i = 1; i <= range; i++) {
        output.push(`${input} * ${i} = ${input * i}`);
    }
    return output.join("\n");
}
console.log(generateMultiplicationTableAdvanced(5, 10));
console.log(generateMultiplicationTableAdvanced(8, 10));