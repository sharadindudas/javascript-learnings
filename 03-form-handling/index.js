const form = document.querySelector("form");
const nameErrorMessage = document.querySelector(".name-input .error-message");
const emailErrorMessage = document.querySelector(".email-input .error-message");
const passwordErrorMessage = document.querySelector(
    ".password-input .error-message"
);
const genderErrorMessage = document.querySelector(
    ".gender-input .error-message"
);
const bioErrorMessage = document.querySelector(".bio-input .error-message");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const password = form.querySelector("input[name='password']").value.trim();
    const gender = form.querySelector("select[name='gender']").value.trim();
    const bio = form.querySelector("textarea[name='bio']").value.trim();

    nameErrorMessage.textContent = "";
    emailErrorMessage.textContent = "";
    passwordErrorMessage.textContent = "";
    genderErrorMessage.textContent = "";
    bioErrorMessage.textContent = "";

    let hasError = false;

    if (!name) {
        nameErrorMessage.textContent = "Please provide a name";
        hasError = true;
    } else if (name.length < 3) {
        nameErrorMessage.textContent = "Name must be at least 3 characters";
        hasError = true;
    } else if (name.length > 60) {
        nameErrorMessage.textContent = "Name must not exceed 60 characters";
        hasError = true;
    }

    if (!email) {
        emailErrorMessage.textContent = "Please provide an email";
        hasError = true;
    } else if (!emailRegex.test(email)) {
        emailErrorMessage.textContent = "Please provide a valid email address";
        hasError = true;
    }

    if (!password) {
        passwordErrorMessage.textContent = "Please provide a password";
        hasError = true;
    } else if (!passwordRegex.test(password)) {
        passwordErrorMessage.textContent =
            "Password must have least 8 characters long and contains at least one lowercase letter, one uppercase letter, one digit, and one special character";
        hasError = true;
    }

    if (!gender) {
        genderErrorMessage.textContent = "Please provide a gender";
        hasError = true;
    } else if (!["male", "female"].includes(gender)) {
        genderErrorMessage.textContent =
            "Please choose the gender from the following options";
        hasError = true;
    }

    if (bio && bio.length > 300) {
        bioErrorMessage.textContent = "Bio must not exceed 300 characters";
        hasError = true;
    }

    if (hasError) return;
    alert("Form submitted successfully!");
    form.reset();
});
