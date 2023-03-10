var navMenu = document.getElementById("nav_menu")
var toggleMenu = document.getElementById("toggle_menu")
var closeMenu = document.getElementById("close_menu")

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
})
closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove("show")
})
aders;





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
