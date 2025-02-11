let yes_btn = document.getElementById("yes_btn");
let no_btn = document.getElementById("no_btn");
let gif = document.getElementById("gif");
let text = document.getElementById("question_text");
let body = document.getElementsByTagName("body")[0];
let bottom_container = document.getElementById("bottom_gif_container");

bottom_container.style.visibility = "hidden";

function yesButton() {
  yes_btn.addEventListener("click", () => {
    console.log("yes!");
    gif.src = "images/happi-cat.gif";
    text.innerHTML = "♡ Спасибо что стала моей Валентинкой :3 ♡";
    body.style.backgroundImage = "url(images/falling_hearts.gif)";
    bottom_container.style.visibility = "visible";
  });
}

yesButton();

function noButton() {
  no_btn.addEventListener("click", () => {
    console.log("no!");
    yes_btn.style.width + 100;


  });
}

noButton();
