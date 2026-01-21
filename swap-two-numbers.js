// Write a function that swap two numbers
function swapTwoNumbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

function swapTwoNumbersJSWay(a, b) {
    return ([a, b] = [b, a]);
}
console.log(swapTwoNumbersJSWay(10, 20));
