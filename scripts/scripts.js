function ScrollToTop() {
  window.scrollTo(0, 0);
}

let mybutton = document.getElementById("TopFunction");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "inline-block";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.display = "none";
  }
}

// /* Script para animacion del menu en dispositivos moviles */
// var navLinks = document.getElementById("navLinks");
// function showMenu() {
//   navLinks.style.right = "0";
// }
// function hideMenu() {
//   navLinks.style.right = "-200px";
// }
