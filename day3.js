console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9); // false

console.log(5 == "5"); // true
console.log(0 == false); // true
console.log(null == undefined); // true

console.log(5 === "5"); // false
console.log(0 === false); // false
console.log(null === undefined); // false

console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("5" / 5); // 1

if ("") console.log("runs?"); // no
if ([]) console.log("runs?"); // yes
if ({}) console.log("runs?"); // yes

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

console.log("hello" && 10); // 10
console.log(null || "fallback"); // fallback

console.log(0 == false); // true
console.log(0 === false); // false

console.log("" == false); // true
console.log("" === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(1 + "2" + 3); // "123"
console.log(1 + 2 + "3"); // "33"
console.log("6" - 1); // 5
console.log("6" + 1); // "61"

// falsy -> 0 "" undefined null false NaN

// && -> returns first falsy or last value
// || -> returns first truthy value
// ?? -> returns right side only if left is null/undefined