var CarLot = (function(oldCarLot){
  var userInput = document.getElementById("userInput");


  oldCarLot.activateEvents = function() {
    console.log("inside events")

    userInput.addEventListener("keyup", function(){
      oldCarLot.clearValue();
    })


  };


  return oldCarLot;
})(CarLot || {});