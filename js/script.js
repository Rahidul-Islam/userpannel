var hamburger = document.querySelector("#hamburger");
var btnst = true;
hamburger.onclick = function () {
  if (btnst == true) {
    document.getElementById("sidebar").classList.add("sidebarshow");
    btnst = false;
  } else if (btnst == false) {
    document.getElementById("sidebar").classList.remove("sidebarshow");
    btnst = true;
  }
};

var btncontainer = document.getElementById("nav-upper-options");
var btns = btncontainer.getElementsByClassName("btn");

for(var i =0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active"
  })
}