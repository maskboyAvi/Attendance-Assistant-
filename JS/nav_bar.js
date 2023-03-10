var navMenu = document.getElementById("nav_menu")
var toggleMenu = document.getElementById("toggle_menu")
var closeMenu = document.getElementById("close_menu")

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
})
closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove("show")
})
