// FizzBuzz (Engineer Version)

/*
    Input: 5
    Output: 1, 2, Fizz, 4, Buzz
    Steps: validate the input -> loop from 1 till the range (input) given -> if the value is multiple of 3 and 5 then FizzBuzz if multiple of 3 then Fizz and if it is multiple of 5 then Buzz else just log the value
    Edge cases: valid input (number or not), number less than equals to 0 or not
*/

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
