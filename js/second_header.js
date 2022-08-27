// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Our teams PopUp

function openPopup() {
  $("body").addClass("showPopup");
}
function closePopup() {
  $("body").removeClass("showPopup removePopup");
}
function closePopupScreen() {
  $("body").addClass("removePopup");
  setTimeout(closePopup, 200);
}

$(".popup .close").on("click", function () {
  closePopupScreen();
});

// auto open popup
// openPopup();
// setTimeout(openPopup, 1000);