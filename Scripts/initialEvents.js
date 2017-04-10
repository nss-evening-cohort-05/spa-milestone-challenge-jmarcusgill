var CarLot = (function(oldCarLot){

var userInput = document.getElementById("userInput");
// var description = document.getElementsByClassName("description");
var editCard = document.getElementsByClassName("thumbnail");
var section = document.getElementsByClassName("carCard");
var submitBtn = document.getElementById("submit");
  oldCarLot.activateEvents = function() {
    for (var j = 0; j < editCard.length; j++){
      editCard[j].addEventListener("click", function(){
        var currentlySelected = document.getElementsByClassName("border");
        for (var k = 0; k < currentlySelected.length; k++) {
          currentlySelected[k].classList.remove("border");
        }
        this.classList.add("border")
        userInput.focus();
        userInput.value = "";
      })
    }
  };
  userInput.addEventListener("keypress", newBio);

  function newBio(event){
    var currentlySelected = document.getElementsByClassName("border");
    var editDescription = currentlySelected[0].lastElementChild.childNodes[3];
    editDescription.innerHTML = "";
    var mimicWords = userInput.value;
    editDescription.innerHTML += mimicWords;
  };
  userInput.addEventListener("keypress", clearInput);
    function clearInput(e){
    if (e.keyCode === 13) {
      userInput.value = "";
    }
  };


  return oldCarLot;
})(CarLot || {});