const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const nameErrorMessage = document
    .querySelector(".name-input")
    .querySelector(".error-message");
const emailErrorMessage = document
    .querySelector(".email-input")
    .querySelector(".error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const gender = e.target[3].value;
    const bio = e.target[4].value;

    if (!name || name.length === 0) {
        nameErrorMessage.textContent = "Please provide a name";
        return;
    } else if (name.length < 3) {
        nameErrorMessage.textContent = "Name must be at least 3 characters";
        return;
    } else if (name.length > 60) {
        nameErrorMessage.textContent = "Name must not exceed 60 characters";
        return;
    } else if (!email || email.length === 0) {
        emailErrorMessage.textContent = "Please provide an email";
        return;
    }

    // form.reset();
});
