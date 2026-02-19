// Write a program to transpose a matrix
function transposeMatrix(input) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        result[i] = [];
        for (let j = 0; j < input.length; j++) {
            result[i][j] = input[j][i];
        }
    }
    return result;
}
console.log(
    transposeMatrix([
        ["a", "b"],
        ["c", "d"]
    ])
);
