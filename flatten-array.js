function flattenArray(input, result = []) {
    if (!Array.isArray(input)) throw new Error("Please provide an array");

    for (let item of input) {
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            flattenArray(item, result);
        }
    }

    return result;
}
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, [8, 9]]]]], []));
