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
  document.getElementById(display).style.display= "block";
  document.getElementById(hide).style.display = "none";
}