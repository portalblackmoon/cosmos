/* Menudrop script */
var submenus = document.querySelectorAll(".menu .submenu");

for (var i = 0; i < submenus.length; i++) {
    submenus[i].addEventListener("mouseover", function(e){
        if (window.innerWidth > 768)
            this.classList.add("submenu-active");
    });
    submenus[i].addEventListener("mouseleave", function(e){
        if (window.innerWidth > 768)
            this.classList.remove("submenu-active");
    });

    submenus[i].addEventListener("click", function(e){
        if (window.innerWidth <= 768) {
            if (this.classList.contains("submenu-active-drop")) 
                this.classList.remove("submenu-active-drop")
            else
                this.classList.add("submenu-active-drop");
        }
    });
    
}


/* Hamburger script */
var hamburger = document.querySelector(".hamburger");
var burgerIcon = document.querySelector(".burger-icon");
var menuContainer = document.querySelector(".menu-container");

hamburger.addEventListener("click", function(e){
    e.stopPropagation();
    if (burgerIcon.classList.contains("active")) {
        burgerIcon.classList.remove("active");
        menuContainer.classList.remove("menu-active");
    }
    else {
        burgerIcon.classList.add("active");
        menuContainer.classList.add("menu-active");
    }
});

document.querySelector(".menu-container").addEventListener("click", function(e){
    e.stopPropagation();
});

window.addEventListener("resize", function(){
    if (window.innerWidth > 768) {
        burgerIcon.classList.remove("active");
        menuContainer.classList.remove("menu-active");
    }
});

document.querySelector("body").addEventListener("click", function() {
    if (window.innerWidth <= 768) {
        burgerIcon.classList.remove("active");
        menuContainer.classList.remove("menu-active");
    }
});

/* Search script */
var lupa = document.querySelector(".lupa");
var buscarContainer = document.querySelector(".buscar-container");
var buscarForm = document.querySelector(".buscar-container form");

lupa.addEventListener("click", function(e){
    e.stopPropagation();
    if (buscarContainer.classList.contains("buscar-active")) {
        buscarContainer.classList.remove("buscar-active");
    }
    else {
        buscarContainer.classList.add("buscar-active");
    }
});

buscarContainer.addEventListener("click", function(e){
    buscarContainer.classList.remove("buscar-active");
});

buscarForm.addEventListener("click", function(e){
    e.stopPropagation();
});