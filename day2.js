// Primitive data types
// null number string symbol boolean bigint undefined (NNSSBBU) shortcut to remember

// Non primitive data types
// object

console.log(typeof 10); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (it's a js bug that null is object)
console.log(typeof {}); // object
console.log(typeof []); // object

let a; // undefined means the variable is assigned memory but we haven't initialised it with some value yet
let b = null; // null means the variable is deliberately / intentionally set to nothing or void
console.log(a);
console.log(b);

let x = 10;
let y = x;
x = 20;
console.log(y); // 10 because primitive data type we only copy the variable's value not the actual variable's memory reference

let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;
console.log(obj2.value); // 20 because for non primitive data type we pass the original variable's reference (heap memory) as the object is stored on the heap memory rather than the stack memory itself (used for primitive data types)

let a1 = 5;
let b1 = a1;
b1 = 10;
console.log(a1); // 5
console.log(b1); // 10

let x1 = { count: 1 };
let y1 = x1;
y1.count = 5;
console.log(x1.count); // 5
console.log(y1.count); // 5

console.log(typeof null); // object (it's a js bug that null is object)
console.log(typeof 20); // number
console.log(typeof "hello"); // string
console.log(typeof Symbol(10)); // Symbol
console.log(typeof true); // boolean
console.log(typeof BigInt(20)); // bigint
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
