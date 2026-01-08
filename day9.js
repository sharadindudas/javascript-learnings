// Odd even

/*
    Input: [1, 2, 3, 4, 5, 6]
    Output: { even: [2, 4, 6], odd: [1, 3, 5] }
    Steps: Validation of array -> Create two even and odd array variables -> loop through the array elements -> if the array element is divisible by 2 then it push it inside even array else odd -> return the output
    Edge cases: Valid array or not, Array is empty or not, Finite array elements or not
*/

function oddEven(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    const even = [],
        odd = [];
    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value % 2 === 0) {
            even.push(value);
        } else {
            odd.push(value);
        }
    }

    return { even, odd };
}
console.log(oddEven([1, 2, 3, 4, 5, 6]));
