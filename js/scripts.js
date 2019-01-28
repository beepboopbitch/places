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

PlaceBook.prototype.findPlace =
