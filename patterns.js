//    *
//   ***
//  *****
// *******
function patternOne(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let s = 0; s < n - i - 1; s++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
patternOne(5);

//     1
//    121
//   12321
//  1234321
// 123454321
function patternTwo(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        for (let j = 0; j < i + 1; j++) {
            row += j + 1;
        }
        for (let k = i; k >= 1; k--) {
            row += k;
        }
        console.log(row);
    }
}
patternTwo(5);
