// Write a function that searches for an element inside an array and returns the index, if the element is not present then just return -1
function searchElementInsideArray(input, target) {
    if (!Array.isArray(input)) {
        throw new Error("Please provide an array");
    }

    for (let i = 0; i < input.length; i++) {
        const value = input[i];
        if (value === target) return i;
    }

    return -1;
}
console.log(searchElement([1, 5, 2, 8, 23], 8));
console.log(searchElement([1, 5, 2, 8, 23], 25));
