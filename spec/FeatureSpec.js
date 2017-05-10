describe("Airport", function() {

  var plane = new Plane();
  var airport = new Airport();

  it("can land a plane at a certain airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});

  it("can tell a plane to take-off from an airport", function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

}
