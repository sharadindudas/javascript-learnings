// Find the max, min and sum of the array elements

/*
    Input: [3, 1, 4, 1, 5]
    Output: { max: 5, min: 1, sum: 14 }
    Steps: validate the input -> loop through the array elements -> define 3 variables one for holding largest number with the lowest value possible, smallest number with the highest value possible and one for storing the total sum of the array elements -> compare each array elements with the largest number and smallest number accordingly and also keep updating the sum of the array elements -> create a object to keep the max min and sum value inside it
    Edge cases: valid array, array must not be empty, check if array elements are finite numbers or not
*/

function getMaxMinSum(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }
    if (!input.length) {
        throw new Error("Input must not be empty");
    }

    let max = -Infinity,
        min = Infinity,
        sum = 0;

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > max) {
            max = value;
        }

        if (value < min) {
            min = value;
        }

        sum += value;
    }

    return { max, min, sum };
}
console.log(getMaxMinSum([3, 1, 4, 1, 5]));
