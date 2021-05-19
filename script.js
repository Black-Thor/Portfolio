/* Navbar Scroll 
*   Lors du scroll la couleur de la nav bar change 
*
*/
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("backcolor");
    document.getElementById("nom").classList.remove("invisible");
  } else {
    document.getElementById("nav").classList.remove("backcolor");
    document.getElementById("nom").classList.add("invisible");
  }
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})