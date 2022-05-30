Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}



//Dark Mode
let dark = document.querySelector(".mode");
dark.addEventListener("click", function () {
    console.log("click");
   document.body.classList.toggle("darkMode");
})



//Carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
return `<span class="carousel__button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel__button">
    
    ${buttonsHtml.join("")}
    
    </div>
    
    
    `)

    const buttons = carousel.querySelectorAll(".carousel__button");
    buttons.forEach((button, i ) => {
        button.addEventListener("click", () =>  {
            items.forEach(item => item.classList.remove("carousel__item--selected") );

            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });

    });
    items[0].classList.add("carousel__item--selected");
    buttons.classList.add("carousel__button--selected");
});













