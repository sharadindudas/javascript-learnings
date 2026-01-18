// Write a function that finds and prints the smallest number among three given numbers
function findSmallestNumber(input) {
    let smallestNumber = Infinity;

    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("All inputs must be finite numbers");
        }

        if (value < smallestNumber) {
            smallestNumber = value;
        }
    }
    return smallestNumber;
}
console.log(findSmallestNumber([4, 6, 2]));
console.log(findSmallestNumber([4, 6, 2, 5, 7, 1]));
