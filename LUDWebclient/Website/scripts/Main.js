document.getElementById("gameScreen").style.display = "none";
document.getElementById("waitingScreen").style.display = "none";

//Add function to join game when username is input//
document.getElementById("nextButtonUser").onclick = function() {
    username = document.getElementById("usernameInput").value.trim();
    if ( username !="") {
        document.getElementById("waitingText").innerHTML = "Velkommen til spillet "+username+". Du burde nu se dit navn på spilskærmen.";
        switchScreens("waitingScreen", "userScreen");
    }
}
//Function to go to gamescreen//
document.getElementById("nextButtonWaiting").onclick = function() {
    switchScreens("gameScreen", "waitingScreen");
}

//Function for showing one element and hiding another//
function switchScreens(display, hide) {
  document.getElementById(display).style.display = "block";
  document.getElementById(hide).style.display = "none";
}


// henter knappen der åbner modal
var btn = document.querySelectorAll("button.modal-button");

// Alle sider moddals
var modals = document.querySelectorAll('.modal');

// Henter <span> element der lukker modal.
var spans = document.getElementsByClassName("close");

// Når brugeren klikker på button åbner modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("data-href"));
    modal.style.display = "block";
 }
}

// Når brugeren klikker på <span> (x), lukker modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
 }
}

// Når brugeren klikker alle andre steder lukker modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
     }
    }
}
