/*jshint strict:false*/

function Airport() {
  var _hangar = [];

  Airport.prototype.planes = function() {
    return _hangar;
  };

  Airport.prototype.clearForLanding = function(plane) {
    _hangar.push(plane);
  };

  Airport.prototype.clearForTakeoff = function(plane) {
    if(this.isStormy()) {
    throw new Error("Weather is shite; flights grounded");
  }
    _hangar = [];
  };

  Airport.prototype.isStormy = function() {
    return false;
  };

}
