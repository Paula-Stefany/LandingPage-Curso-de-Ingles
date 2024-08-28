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


/* TESTIMONIAL CARDS */

const card = document.getElementById("testimonial-cards");
const scrollLeft = document.getElementById("left");
const scrollRight = document.getElementById("right");

scrollLeft.addEventListener("click", () => {
    card.scrollBy({
        left: - 270,
        behavior: "smooth",
    });
});

scrollRight.addEventListener("click", () => {
    card.scrollBy({
        left: 270,
        behavior: "smooth",
    });
});
