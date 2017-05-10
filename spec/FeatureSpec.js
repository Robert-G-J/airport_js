describe("An ATC", function() {

  var plane = new Plane();
  var airport = new Airport();

  it("can tell a plane to land at an airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("can tell a plane to take-off from an airport", function () {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

});
