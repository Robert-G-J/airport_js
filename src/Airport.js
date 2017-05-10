/*jshint strict:false*/

function Airport() {
  var hangar = [];

  Airport.prototype.planes = function() {
    return hangar;
  };

  Airport.prototype.clearForLanding = function(plane) {
    hangar.push(plane);
  };

}
