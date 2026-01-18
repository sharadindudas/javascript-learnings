// Write a function that tells if the given number is prime or not
function checkPrimeNumber(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }

    if (!Number.isInteger(input) || input <= 1) {
        return false;
    }

    console.log(Math.sqrt(input))

    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrimeNumber(11));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(1));
console.log(checkPrimeNumber(0));
console.log(checkPrimeNumber(-7));
console.log(checkPrimeNumber(9));
