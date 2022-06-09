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
    "./images/nik-shuliahin-kegWoCHJzGY-unsplash.jpg",
    "./images/luca-bravo-_QdFx92MO2U-unsplash.jpg",
    "./images/paulo-silva-5oO1xH5h8kQ-unsplash.jpg"];


let carousel = document.querySelector(".carouselContainer");
let counter = 0;

carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`
carousel.style.backgroundRepeat = `no-repeat`
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';

setInterval(nextPicture,3000);

function nextPicture() {
    if (counter < allCarouselImg.length - 1) {
        counter++
        carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`;
    } else {
        counter = 0;
        carousel.style.backgroundImage = `url(${allCarouselImg[counter]})`;
    }
}




//Collage
const collageImg = document.querySelectorAll(".collageImage");
// console.log(collageImg);


function zoomInImage (img) {
    img.style.transform = "scale(1.1)";
    img.style.transition =  "transform 0.25s ease";
    img.style.width = "100%";

}

function zoomInReset (img) {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}



for (let i = 0; i < collageImg.length; i++) {
    collageImg[i].addEventListener("click", function (){
        zoomInImage(collageImg[i]);
        const image1 = document.getElementById("img1");
        image1.innerHTML = htmlCode;
    })
}

for (let i = 0; i < collageImg.length; i++) {
    collageImg[i].addEventListener("mouseout", function (){
        zoomInReset(collageImg[i]);
    })
}

const imagesArray = [
    {
        id: 1,
        description:" Me on the stage",
        title: "Concert"
    }
]


let htmlCode = ``;



imagesArray.forEach(function (singleImage) {
    htmlCode =
        htmlCode + ` 
 <article>
            <div>
                <h3>${singleImage.title}</h3>
                <h3>${singleImage.description}</h3>
            </div>
        </article>`

    // console.log(imagesArray);

});


//Pokemon's


//Pidgeot
let pokeImage = "./images/poke.png";

const poke = document.querySelector(".poke");
// console.log(poke);
poke.addEventListener("mouseover", function (e){
    // console.log(pokeImage);
    e.target.img = pokeImage;
})




let circle = document.querySelector(".chaser");

let mouseMovementStoppedTimer;
const mouseMovementStopped = function() {
    circle.style.opacity = 0;
}

window.addEventListener('mousemove', (function(e) {
    // Make the cursor visible immediately
    circle.style.opacity = 1;

    // Change position of cursor only when mousemove is detected
    setTimeout(() => {
        // Change cursor position using translate, clientX & clientY
        circle.style.transform =  `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 100);

    clearTimeout(mouseMovementStoppedTimer);
    mouseMovementStoppedTimer = setTimeout(mouseMovementStopped, 200);
}));








































