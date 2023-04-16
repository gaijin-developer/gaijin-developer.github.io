const menuContainer = document.getElementsByClassName("menuContainer")[0];
const navBar = document.getElementsByClassName("navBar")[0];

menuContainer.addEventListener("click", function (){
    navBar.classList.toggle("active")
})
console.log(menuContainer);