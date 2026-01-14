// Write a function to check whether the given year is leap year or not
function isLeapYear(year) {
    if (typeof year !== "number") {
        throw new Error("Year must be a number");
    }

    if (!Number.isFinite(year)) {
        throw new Error("Year must be a finite number");
    }

    if (!Number.isInteger(year) || year <= 0) {
        throw new Error("Year must be a positive integer and greater than zero");
    }

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
