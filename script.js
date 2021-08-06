//---- resposive menu ----//
let show = true;
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const sections = menuSection.querySelectorAll(".menu-toggle nav ul li") 

function handleClickNavbar() {
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
}

menuToggle.addEventListener("click", () => handleClickNavbar())
document.querySelectorAll('.line').forEach(el => el.addEventListener('click', () => !show && handleClickNavbar()))