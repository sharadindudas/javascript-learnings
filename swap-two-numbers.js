// Write a function that swap two numbers
function swapTwoNumbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(swapTwoNumbers(10, 20));

function swapTwoNumbersJSWay(a, b) {
    return ([a, b] = [b, a]);
}
console.log(swapTwoNumbersJSWay(10, 20));

function swapTwoNumbersWithoutThirdVar(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapTwoNumbersWithoutThirdVar(10, 20));
