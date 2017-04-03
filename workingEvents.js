var CarLot = (function(oldCarLot){
var description = document.getElementsByClassName("description");

oldCarLot.clearValue = function(event) {
  console.log("user input", userInput.value)
  description.innerHTML = userInput.value;
  userInput.onkeydown = function() {
    if(window.event.keyCode === 13) {
      description = "";
      userInput.value = "";
    }
  }
};

  return oldCarLot;
})(CarLot || {});