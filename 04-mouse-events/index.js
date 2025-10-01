const box = document.querySelector("#box");

// box.addEventListener("mouseover", () => {
//     box.style.backgroundColor = "yellow";
// });

// box.addEventListener("mouseout", () => {
//     box.style.backgroundColor = "rgb(255, 214, 214)";
// });

window.addEventListener("mousemove", (e) => {
    const { width, height } = box.getBoundingClientRect();
    const offsetX = width / 2;
    const offsetY = height / 2;

    box.style.top = e.clientY - offsetX + "px";
    box.style.left = e.clientX - offsetY + "px";
});
