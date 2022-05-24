const menu = document.querySelector(".menu");
const hide = document.querySelector(".hide");
const nav = document.querySelector(".navegacion")

menu.addEventListener("click", () => {
    nav.classList.toggle("hide");
})