const bars = document.getElementById("bars");
const nav = document.getElementById("nav");
const navItems = document.querySelectorAll("a");

function toogleMenu(){
    nav.classList.toggle("active");
}

bars.addEventListener("click", toogleMenu);

navItems.forEach((item) => {
    item.addEventListener("click", toogleMenu);
})