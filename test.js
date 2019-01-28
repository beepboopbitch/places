//Business Logic for DestinationBook
function DestinationBook() {
  this.destinations = [];
}

DestinationBook.prototype.addDestination = function(destination) {
  contact.id = this.assignId();
  this.destinations.push(destination);
}

DestinationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

DestinationBook.prototype.findDestination = function(id) {
  for (var i = 0; i < this.destinations.length; i++) {
    if (this.destinations[i].id == id) {
      return this.destinations[i];
    }
  };
  return false;
}

DestinationBook.prototype.deleteDestination = function(id) {
  for (var i = 0; i < this.destinations.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}


//Business Logic for Destination
function Destination(location, landmark, timeVisited, notes) {
  this.location =  [location],
  this.landmark = [landmark],
  this.timeVisited = [timeVisited],
  this.notes = [notes]
}

Destination.prototype.removeValue = function(key) {
  this.key.pop();
  return this.key;
}

Destination.prototype.addValue = function(key, value) {
  this.key.push(value);
  return this.key;
}

//user interface
var Seattle = new Destination("Washington", "Space Needle", "1/23/2019", "fun times");

$(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    var result = Destination;
    $("#result").text.(result);
  });
});
