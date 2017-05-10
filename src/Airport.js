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
    this._hangar = [];
  };

}
