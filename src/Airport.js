/*jshint strict:false*/

function Airport() {
  var _hangar = [];
  var _default_capacity = 1;

  Airport.prototype.planes = function() {
    return _hangar;
  };

  Airport.prototype.capacity = function() {
    return _default_capacity;
  };

  Airport.prototype.clearForLanding = function(plane) {
    if(this.isStormy()) {
      throw new Error('Weather is British, do one');
    };
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
