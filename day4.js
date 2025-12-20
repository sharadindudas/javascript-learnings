let x = 0;
if (x) {
    console.log("truthy");
} else {
    console.log("falsy");
} // falsy

function login(user) {
    if (user) {
        if (user.isActive) {
            if (user.role === "admin") {
                return "Welcome admin";
            } else {
                return "Welcome user";
            }
        } else {
            return "User inactive";
        }
    } else {
        return "No user";
    }
}

function login(user) {
    if (!user) return "No user";
    if (!user.isActive) return "User inactive";
    if (user.role === "admin") return "Welcome admin";
    return "Welcome user";
}

function canVote(age, isCitizen = true) {
    if (typeof age !== "number") return false;
    if (age < 18) return false;
    if (!isCitizen) return false;
    return true;
}
console.log(canVote(18, true));
