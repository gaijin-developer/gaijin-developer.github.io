const menuButton = document.querySelectorAll('.menuContainer')[0];
const nav = document.querySelector('nav');

console.log(menuButton);
console.log(nav);

menuButton.addEventListener("click", function (){
    nav.classList.toggle("active")
})