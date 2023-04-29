const menuButton = document.querySelectorAll('.menuContainer')[0];
const nav = document.querySelector('nav');


menuButton.addEventListener("click", function (){
    nav.classList.toggle("active")
})