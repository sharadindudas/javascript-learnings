for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    // console.log(i);
} // 1 2 4 5

for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    // console.log(i);
} // 1 2

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    // console.log(i);
} // 0 1 3 4

// Prints numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}
// Prints only even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

// Prints the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

function countDown(n) {
    if (typeof n !== "number" || n < 0) return "Please provide a valid input";
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}
countDown(5);
