//business logic for Destination constructor

function Place(location, landmark, timeVisited, notes) {
  this.location = [location],
  this.landmark = [landmark],
  this.timeVisited = [timeVisited],
  this.notes = [notes]
}

Place.prototype.addValue = function(key, value) {
  this[key].push(value);
  // console.log(this.key);
}

Place.prototype.deleteValue = function(key) {
  this[key].pop();
}


//business logic for DestinationBook constructor
function PlaceBook(place) {
  this.places = [];
  this.currentId = 0;
}

PlaceBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlaceBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceBook.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

PlaceBook.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

//user interface logic
var placeBook = new PlaceBook();

function displayPlaceDetails(placeBookToDisplay) {
  var placesList = $("ul#places");
  var htmlForPlaceInfo = "";
  placeBookToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
};

function showPlace(placeId) {
  var place = placeBook.findPlace(placeId);
  $("#show-place").show();
  $(".location").html(place.location);
  $(".landmark").html(place.landmark);
  $(".timeVisited").html(place.timeVisited);
  $(".notes").html(place.notes);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + place.id + ">Delete</button>");
}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function() {
    showPlace(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    placeBook.deletePlace(this.id);
    $("#show-place").hide();
    displayPlaceDetails(placeBook);
  });
};

$(document).ready(function() {
  attachPlaceListeners();
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeVisited = $("input#new-timeVisited").val();
    var inputtedNotes = $("input#new-notes").val();
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeVisited").val("");
    $("input#new-notes").val("");
    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTimeVisited, inputtedNotes);
    placeBook.addPlace(newPlace);
    console.log(placeBook.places);
    displayPlaceDetails(placeBook);
  })
})
