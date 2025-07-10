// JavaScript Document
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";//además de ser de la clase topnav, también lo va a ser de responsive
  } else {
    x.className = "topnav";//vuelve a ser solo de la clase topnav
  }
}
