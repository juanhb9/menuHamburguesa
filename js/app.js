
// activar botón hamburguesa para que aparezca en menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

// tabulación en botones

if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label", "cerrar menu");
}else{
    navToggle.setAttribute("aria-label", "abrir menu");
}
// fin tabulacion de botones

});