// Write a program to move all zeros to end (in-place)
function moveZeroesToEnd(input) {
    if (!Array.isArray(input)) throw new Error("Please provide an array");
    let indexPosition = 0;

    for (let i = 0; i < input.length; i++) {
        const currVal = input[i];
        if (currVal !== 0) {
            input[indexPosition] = currVal;
            indexPosition++;
        }
    }

    for (let i = indexPosition; i < input.length; i++) {
        input[i] = 0;
    }
    return input;
}
console.log(moveZeroesToEnd([0, 1, 0, 3, 12]));
