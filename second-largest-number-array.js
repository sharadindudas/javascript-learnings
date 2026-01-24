// Write a function that returns the second largest number in an array
function secondLargestNumberInsideArray(input) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array");
    }
    if (input.length < 2) {
        throw new Error("Array must have at least 2 elements");
    }

    let largestNumber = -Infinity,
        secondLargestNumber = -Infinity;
    for (let i = 0; i < input.length; i++) {
        const value = input[i];

        if (!Number.isFinite(value)) {
            throw new Error("Array elements must be finite numbers");
        }

        if (value > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = value;
        } else if (value > secondLargestNumber && value < largestNumber) {
            secondLargestNumber = value;
        }
    }

    if (secondLargest === -Infinity) {
        throw new Error("Array must contain at least two distinct numbers");
    }
    
    return secondLargestNumber;
}
console.log(secondLargestNumberInsideArray([4, 9, 0, 2, 8, 7, 1]));
