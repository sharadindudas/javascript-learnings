let x = 5;
let y = x;

x = 10;

console.log(x); // 10
console.log(y); // 5

// because y has the copy of x rather than the original memory reference (primitive datatype)

const a = 10,
    b = 20;
function sum(x, y) {
    return x + y;
}
console.log(sum(a, b));

const c = 348,
    d = 423,
    e = 3548,
    f = 23,
    g = 20;
console.log(c, d, e, f, g);
