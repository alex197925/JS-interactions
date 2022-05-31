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

//Select all slides
const slides = document.querySelectorAll(".slide");

//Loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
})

// current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    curSlide++;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
});

// select next slide button
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click",function (){
    // check if current slide is the last and reset current slide
    if(curSlide === maxSlide) {
        curSlide = 0;
    }else {
        curSlide++;
    }
});

// select prev slide button
const  prevSlide = document.querySelector(".btn-prev");

// add event listener and next slide functionality
prevSlide.addEventListener("click", function (){
    // check if current slide is the first and reset current slide to last
    if(curSlide === 0){
        curSlide = maxSlide;
    }else {
        curSlide--;
    }
    //   move slide by 100%
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });

});


















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












