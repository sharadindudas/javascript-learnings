// Write a program to convert temperature from celcius to farenheit
function celciusToFarenheitConverter(input) {
    if (typeof input !== "number" || !Number.isFinite(input)) {
        throw new Error("Please provide a valid number");
    }
    return (input * 9) / 5 + 32;
}
console.log(celciusToFarenheitConverter(25));
console.log(celciusToFarenheitConverter(27));
console.log(celciusToFarenheitConverter(37));
