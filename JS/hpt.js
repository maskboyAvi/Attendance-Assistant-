var navMenu = document.getElementById("nav_menu")
var toggleMenu = document.getElementById("toggle_menu")
var closeMenu = document.getElementById("close_menu")

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
})
closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove("show")
})

function create(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
}
document.getElementById("code").innerHTML=result;
}

function end(){
    setTimeout(
        function(){
            document.getElementById("code").innerHTML=" " ;
        },10000
    )
}
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
