const menuContainer = document.getElementsByClassName("mobileMenuContainer")[0];
const closeButton = document.getElementsByClassName("mobileCloseButton")[0];
const navBar = document.getElementsByClassName("navBar")[0];
const navBarListContainer = document.getElementsByClassName(
  "navBarListContainer"
)[0];

menuContainer.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", hideMenuBar);
menuContainer.addEventListener("click", toggleMenu);
//show the mobile navbar button
function toggleMenu() {
  const navListClasses = navBarListContainer.classList;
  const classes = navBar.classList;

  let toggleState = classes.toggle("showmenu");
  let navlistToggleState = navListClasses.add("listToggler");
  navListClasses.remove("hidemenuanime");
}
// hide the mobile nav button
function hideMenuBar() {
  const navListClasses = navBarListContainer.classList;

  navListClasses.remove("listToggler");
  navListClasses.add("hidemenuanime");
  setTimeout(toggleMenu, "200");
}
