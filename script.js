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
const allCarouselImg = ["./images/colton-duke-UExx0KnnkjY-unsplash.jpg",
    "./images/florian-wehde-J6mySj3wntg-unsplash.jpg",
    ".images/nik-shuliahin-kegWoCHJzGY-unsplash.jpg",
    "./images/luca-bravo-_QdFx92MO2U-unsplash.jpg",
    ".images/paulo-silva-5oO1xH5h8kQ-unsplash.jpg"];


let carousel = document.getElementById("carouselContainer");
let counter = 0;

carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`
carousel.style.backgroundRepeat = `no-repeat`
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';

setInterval(nextPicture,3000)

function nextPicture() {
    if (counter < allCarouselImg.length - 1) {
        counter++
        carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`
    } else {
        counter = 0;
        carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`
    }
}


//Collage
const allCollageImg = document.querySelectorAll(".image");
console.log(allCollageImg);

for (let i = 0; i < allCollageImg.length; i++) {
    console.log(i);


}






















// document.querySelectorAll(".carousel").forEach(carousel => {
//     const items = carousel.querySelectorAll(".carousel__item");
//     const buttonsHtml = Array.from(items, () => {
// return `<span class="carousel__button"></span>`;
//     });
//     carousel.insertAdjacentHTML("beforeend", `
//     <div class="carousel__button">
//
//     ${buttonsHtml.join("")}
//
//     </div>
//
//
//     `)
//
//     const buttons = carousel.querySelectorAll(".carousel__button");
//     buttons.forEach((button, i ) => {
//         button.addEventListener("click", () =>  {
//             items.forEach(item => item.classList.remove("carousel__item--selected") );
//
//             buttons.forEach(button => button.classList.remove("carousel__button--selected"));
//
//             items[i].classList.add("carousel__item--selected");
//             button.classList.add("carousel__button--selected");
//         });
//
//     });
//     items[0].classList.add("carousel__item--selected");
//     buttons.classList.add("carousel__button--selected");
// });
//












