var CarLot = (function(oldCarLot){

oldCarLot.populatePage = function (inventory) {
  // Loop over the inventory and populate the page
  var carOutput = document.getElementById("output");
  var carBuilder = "";
  for (var i = 0; i < inventory.length; i++) {
    if( i%3 === 0) {
      carBuilder += `<div class="row">`;
    }
    var currentcar = inventory[i];
    carBuilder += `<div class="col-sm-6 col-md-4 carCard">`;
    carBuilder += `<div class="thumbnail">`;
    carBuilder += `<img class="imgSize" src="${currentcar.url}">`
    carBuilder += `<div class="caption">`;
    carBuilder += `<h3> ${currentcar.make} </h3>`;
    carBuilder += `<h3> ${currentcar.model} </h3>`;
    carBuilder += `<h3> ${currentcar.year} </h3>`;
    carBuilder += `<div class="description"><p> ${currentcar.description} </p></div>`;
    carBuilder += `<h4> $${currentcar.price} </h4>`;
    carBuilder += `</div></div></div>`;
    if(i%2 === 2){
      carBuilder +=`<div>`
    }
  }
  carOutput.innerHTML += carBuilder;
  // Now that the DOM is loaded, establish all the event listeners needed
  oldCarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
oldCarLot.loadInventory();

return oldCarLot;
})(CarLot || {});