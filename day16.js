// Write a function that returns the result of raising a given number to a specified power

function calculatePower(base, exponent) {
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new Error("Base and exponent must be a number");
    }

    if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
        throw new Error("Base and exponent must be finite numbers");
    }

    return base ** exponent;
}
console.log(calculatePower(2, 4));

function calculatePower2(base, exponent) {
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new Error("Base and exponent must be a number");
    }

    if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
        throw new Error("Base and exponent must be finite numbers");
    }

    let output = 1;
    for (let i = 1; i <= exponent; i++) {
        output *= base;
    }
    return output;
}
console.log(calculatePower2(2, 4));
console.log(calculatePower2(2.5, -3));
