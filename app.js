const monButton = document.getElementById("btn-menu");
const menuCache = document.getElementById("navbar-cache");
const closeButton = document.getElementById("navbar-clicable");

monButton.addEventListener("click", function () {
    menuCache.style.display = "flex"
})

closeButton.addEventListener("click", function () {
    menuCache.style.display = "none";
});