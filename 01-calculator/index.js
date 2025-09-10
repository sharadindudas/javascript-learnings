const buttons = document.querySelectorAll("button");
const output = document.querySelector("#output");

function isOperator(value) {
    return ["+", "-", "*", "/", "%"].includes(value);
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const currentButtonValue = e.target.value;
        const lastCharacter = output.value.slice(-1);

        switch (currentButtonValue) {
            case "AC":
                output.value = "0";
                break;
            case "DEL":
                output.value.length === 1
                    ? (output.value = "0")
                    : (output.value = output.value.slice(0, -1));
                break;
            case "=":
                try {
                    output.value = eval(output.value);
                } catch (err) {
                    console.error(err);
                    output.value = "Error";
                }
                break;
            default:
                if (isOperator(currentButtonValue) && isOperator(lastCharacter))
                    return;
                else if (isOperator(currentButtonValue) && output.value === "0")
                    return;
                else if (
                    output.value === "0" ||
                    output.value.includes("Error")
                ) {
                    output.value = currentButtonValue;
                } else {
                    output.value += currentButtonValue;
                }
        }
    });
});
