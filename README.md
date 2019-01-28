spec1: create an object constructor for location
input: var newDestination = new Destination (...)
output: Location {xxx, xxx}

spec2: create prototype to delete Location
input: newDestination.prototype.delete();
output: delete newDestination

spec3: create prototype to edit location
input: newDestination.prototype.edit();
output: edit newDestination;

spec4: create prototype to add Location
input: newDestination.prototype.add();
output: add newDestination

spec 5: display location object
input: click
output: location object including all key-value pairs
