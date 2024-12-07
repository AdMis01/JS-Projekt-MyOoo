const arrowDown = document.querySelector(".contOptionUser");
const downMenu = document.getElementById("menu");

window.onclick = function(event) {
    if (!event.target.closest(".contOptionUser") && !event.target.closest("#menu")) {
        downMenu.style.display = "none";
    }
};

arrowDown.addEventListener("click", (event) => {
    event.stopPropagation();
    if (downMenu.style.display === "block") {
        downMenu.style.display = "none";
    } else {
        downMenu.style.display = "block";
    }
});