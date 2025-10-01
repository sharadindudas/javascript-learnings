const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cards-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const photoUrl = e.target[2].value;

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
            <img
                src=${photoUrl}
                alt="Profile Photo"
                class="photo-url"
            />
            <div class="card-info">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
    `;
    cardsContainer.appendChild(cardElement);
    form.reset();
});
