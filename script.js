//---- resposive menu ----//
let show = true;
const menuSection = document.querySelector(".menu-section")
const menuTuggle = menuSection.querySelector(".menu-toggle")

menuTuggle.addEventListener("click", () =>{
document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})