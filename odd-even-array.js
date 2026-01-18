// Write a function that calculates the odd and even numbers inside an array
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
