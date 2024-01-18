//The side menu button 
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", () => {
    HandleMenu();
});
function HandleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}

// To top button
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

});
