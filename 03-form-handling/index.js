const form = document.querySelector("form");
const nameErrorMessage = document.querySelector("#name-error-message");
const emailErrorMessage = document.querySelector("#email-error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    nameErrorMessage.textContent = "";
    emailErrorMessage.textContent = "";

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    let isValid = true;

    if (!name) {
        nameErrorMessage.textContent = "Please provide a name";
        isValid = false;
    }
    else if(name.length >=)

    if (!email) {
        emailErrorMessage.textContent = "Please provide an email";
        isValid = false;
    }

    if (!isValid) return;
    alert("Form submitted successfully");
    form.reset();
});
