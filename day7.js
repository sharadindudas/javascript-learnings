let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]

console.log(arr); // [0, 1, 2, 3]

// Print all elements
const arr2 = [5, 10, 15, 20];
for (let value of arr2) {
    console.log(value);
}

// Calculate the sum
function sum(arr) {
    let total = 0;
    for (let value of arr) {
        total += value;
    }
    return total;
}
const totalSum = arr2.reduce((acc, curr) => acc + curr, 0);
console.log(sum(arr2));
console.log(totalSum);

// Find the largest number
function findLargestNumber(arr) {
    let largestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}
console.log(findLargestNumber(arr2));

// Double elements inside array
function doubleArray(arr) {
    if (!Array.isArray(arr)) return "Please provide a valid input";
    for (let item of arr) {
        if (!Number.isFinite(item)) return "Array must contain only numbers";
    }
    return arr.map((item) => item * 2);
}
console.log(doubleArray(arr2));

// Get even numbers from array
function getEvenNumbers(arr) {
    if (!Array.isArray(arr)) return "Invalid input";
    for (let item of arr) {
        if (!Number.isFinite(item)) return "Array must contain only numbers";
    }
    return arr.filter((item) => item % 2 === 0);
}
console.log(getEvenNumbers(arr2));
