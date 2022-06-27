let Allcolors = document.querySelectorAll(".color span");
let img = document.querySelector(".image");
let card = document.querySelector(".card");

Allcolors.forEach((color) => {
    color.addEventListener("click", () => {
        bgColor = color.getAttribute("data-color");
        card.style.setProperty('--bgColor', bgColor);
        
        imgColor = color.getAttribute("data-image");
        img.src = imgColor;

        Allcolors.forEach((color) => color.classList.remove("border-effect"));
        color.classList.add("border-effect");
    })
})