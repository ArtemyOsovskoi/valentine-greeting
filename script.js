let yes_btn = document.getElementById("yes_btn");
let no_btn = document.getElementById("no_btn");
let gif = document.getElementById("gif");
let text = document.getElementById("question_text");
let body = document.getElementsByTagName("body")[0];
let bottom_container = document.getElementById("bottom_gif_container");

bottom_container.style.visibility = "hidden";

function yesButton() {
  yes_btn.addEventListener("click", () => {
    gif.src = "images/cat_love.gif";
    text.innerHTML = "♡ Спасибо что стала моей Валентинкой :3 ♡";
    body.style.backgroundImage = "url(images/falling_hearts.gif)";
    bottom_container.style.visibility = "visible";
    yes_btn.style.width = 140 + "px";
    yes_btn.style.height = 60 + "px";
    no_btn.innerHTML = "Нет";
  });
}
yesButton();

function noButton() {
  no_btn.addEventListener("click", () => {
    gif.src = "images/cat-crying.gif";
    text.innerHTML = "(｡•́︿•̀｡)";
    body.style.backgroundImage = "url(images/peperain.gif)";
    bottom_container.style.visibility = "hidden";

    let yesBtnWidth = yes_btn.offsetWidth;
    let yesBtnHeight = yes_btn.offsetHeight;

    if (yesBtnWidth < 360 && yesBtnHeight < 360) {
      yes_btn.style.width = yesBtnWidth + 60 + "px";
      yes_btn.style.height = yesBtnHeight + 60 + "px";
    }

    let noBtnMessages = [
      "Точно...?",
      "Может подумать еще разок...?",
      "Пожалуйста...?(｡•́︿•̀｡)",
    ];
    no_btn.innerHTML =
      noBtnMessages[Math.floor(Math.random() * noBtnMessages.length)];
  });
}
noButton();
