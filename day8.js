// Reverse an array

/*
    Input: [1, 2, 3, 4, 5]
    Output: [5, 4, 3, 2, 1]
    Steps: Valid array or not -> Array is empty or not -> Define a blank output array variable -> Loop through the array elements from the last array element till the first one -> validation if the array has finite array elements or not -> push all the elements inside the blank output array -> return the output array variable
    Edge cases: Valid array or not, Array is empty or not, Finite array elements or not
*/

function reverseArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    const output = [];

    for (let i = input.length - 1; i >= 0; i--) {
        output.push(input[i]);
    }

    return output;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
