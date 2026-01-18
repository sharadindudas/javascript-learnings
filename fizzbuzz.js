// FizzBuzz (Engineer Version)
function fizzBuzz(input) {
    if (typeof input !== "number") {
        throw new Error("Input must be of type number");
    }
    if (input <= 0) {
        throw new Error("Input must not be less or equals to zero");
    }

    const result = [];
    for (let i = 1; i <= input; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}
console.log(fizzBuzz(5));
