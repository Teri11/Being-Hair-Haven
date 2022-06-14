const hambuger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");


hambuger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})