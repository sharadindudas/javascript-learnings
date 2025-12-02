// Problem 1 — Create a counter using closure
function createCounter() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Problem 2 — Implement your own once() function
function once(fn) {
    let isRunning = true;
    return () => {
        if (isRunning) {
            fn();
            isRunning = false;
        }
    };
}

function greet() {
    console.log("Hello!");
}
const runOnce = once(greet);
runOnce(); // "Hello!"
runOnce(); // nothing (fn should not run again)
runOnce(); // nothing

// Problem 3 — Sum of repeated numbers
function sum(x) {
    let total = x;

    function inner(y) {
        total += y;
        return inner;
    }

    inner.valueOf = function () {
        return total;
    };

    return inner;
}
console.log(+sum(5)); // 5
console.log(+sum(5)(3)); // 8
console.log(+sum(5)(3)(2)); // 10
