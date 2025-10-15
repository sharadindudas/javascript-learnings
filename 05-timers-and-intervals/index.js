const progress = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const countdownText = document.querySelector(".countdown");
const alertBox = document.querySelector(".alert-box");
const downloadBtn = document.querySelector(".download-btn");

function progressBar() {
    let count = 0;
    const timer = setInterval(() => {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            progressText.textContent = `${count}% Completed`;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

function countdownTimer() {
    let count = 10;
    const timer = setInterval(() => {
        if (count >= 0) {
            countdownText.innerHTML = count;
            count--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

countdownTimer();

downloadBtn.addEventListener("click", () => {
    let count = 0;
    alertBox.style.display = "block";
    alertBox.style.opacity = 0;

    const timer = setInterval(() => {
        if (count <= 1) {
            alertBox.style.opacity = count;
            count += 0.1;
        } else {
            clearInterval(timer);
            
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 2000);
        }
    }, 100);
});
