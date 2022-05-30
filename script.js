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



