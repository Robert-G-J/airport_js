describe("Airport", function() {

  var plane = new Plane();
  var airport = new Airport();

  it("can land a plane at a certain airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  
});
