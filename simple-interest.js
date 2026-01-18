// Write a function that calculates and prints the simple interest on a loan amount
function calculateSimpleInterest(principal, rate, time) {
    if (![principal, rate, time].every(Number.isFinite)) {
        throw new Error("All inputs must be finite numbers");
    }

    if (principal <= 0 || rate <= 0 || time <= 0) {
        throw new Error("Please provide positive numbers");
    }

    const interest = (principal * rate * time) / 100;
    return Math.ceil(interest);
}
console.log(calculateSimpleInterest(1000, 5, 1));
console.log(calculateSimpleInterest(20000, 10, 5));
console.log(calculateSimpleInterest(20000, 8.755, 5));
