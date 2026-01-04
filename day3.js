// Find the Largest Number

/*
    Input: [3, 7, 2, 9, 1]
    Output: 9
    Steps: Take array as input -> validate the data -> loop over the array elements -> initialize a variable with the lowest number (-Infinity) -> check if the array element is greater than the variable we initialized if yes then update the variable value with the new value else don't update it -> return the largest number 
    Edge cases: valid array or not, empty array, if the elements inside the array is finite numbers or not
*/

function largestNumber(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array as input");
    }

    if (!input.length) {
        throw new Error("Array must not be empty");
    }

    let max = -Infinity;

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > max) {
            max = value;
        }
    }

    return max;
}
console.log(largestNumber([3, 7, 2, 9, 1]));
