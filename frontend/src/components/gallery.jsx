import React from "react";


function Gallery(){

    // var navMenu = document.getElementById("nav_menu")
    // var toggleMenu = document.getElementById("toggle_menu")
    // var closeMenu = document.getElementById("close_menu")
    
    // toggleMenu.addEventListener("click", () =>{
    //     navMenu.classList.toggle("show")
    // })
    // closeMenu.addEventListener("click", () =>{
    //     navMenu.classList.remove("show")
    // })
        let list=document.querySelectorAll('.list');
        let item=document.querySelectorAll('.item');
    
        for(let i=0;i<list.length;i++){
            list[i].addEventListener('click',function(){
                for(let j=0;j<list.length;j++){
                    list[j].classList.remove('active');
                }
                this.classList.add('active');
    
                let dataFilter=this.getAttribute('data-filter');
    
                for(let k=0;k<item.length;k++){
                item[k].classList.remove('active');
                item[k].classList.add('hide');
    
                if(item[k].getAttribute('data-item')==dataFilter || dataFilter=="all"){
                    item[k].classList.remove('hide');
                    item[k].classList.add('active');
                }
            }
            })
        }
return(
    <div>
    <div class="container">
        <h1 class="h-anime">PHOTO GALLERY</h1>
    </div>
    <section>
        <ul>
            <li class="list active" data-filter="all">All</li>
            <li class="list" data-filter="AKS">Atharv Krishnarao Sawant</li>
            <li class="list" data-filter="ALD">Atharva Lalit Dudhe</li>
            <li class="list" data-filter="AK">Aviral Katiyar</li>
            <li class="list" data-filter="AG">Ayush Gupta</li>
            <li class="list" data-filter="AB">Akhilender bongawir</li>
            <li class="list" data-filter="CSN">Chitta Sri Naga Sankara Pavana Saketh Ram</li>
            <li class="list" data-filter="Vish">Vishal</li>
        </ul>
        <div class="Boys">
            <div class="pic item pic1" data-item="AKS"><img src="\Images\Main\AKS.jpeg"/></div>
            <div class="pic item pic2" data-item="ALD"><img src="/Images\Main\Atharva.jpeg"/></div>
            <div class="pic item pic3" data-item="AK"><img src="/Images/Main/Aviral.jpeg"/></div>
            <div class="pic item pic4" data-item="AG"><img src="/Images/Main/Ayush.jpeg"/></div>
            <div class="pic item pic5" data-item="AB"><img src="\Images\Main\Akhil.jpeg"/></div>
            <div class="pic item pic6" data-item="CSN"><img src="/Images/Main/CSNPSR.jpeg"/></div>
            <div class="pic item pic7" data-item="Vish"><img src="/Images\Main\Vishal.jpg"/></div>
        </div>
        <div class="Boys">
            <div class="h3-anime">College Fest PICS [EQUINOX 2023]</div>
            <div class="seperator"></div><br></br>
            <div class="pic item fun pic7" data-item=""><img src="\Images\Equinox\WhatsApp Image 2023-03-10 at 10.28.53 PM.jpeg"/></div>
            <div class="pic item fun pic8" data-item=""><img src="\Images\Equinox\WhatsApp Image 2023-03-10 at 10.28.54 PM (1).jpeg"/></div>
            <div class="pic item fun pic9" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM (1).jpeg"/></div>
            <div class="pic item fun pic10" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM.jpeg"/></div>
            <div class="pic item fun pic11" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.33.05 PM.jpeg"/></div>
            <div class="pic item fun pic12" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.31.12 PM (1).jpeg"/></div>
            <div class="pic item fun pic13" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.54 PM.jpeg"/></div>
            <div class="pic item fun pic14" data-item=""><img src="/Images/Equinox/WhatsApp Image 2023-03-10 at 10.32.35 PM.jpeg"/></div>
        </div>
    </section>
    </div>
);

}

export default Gallery;