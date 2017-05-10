describe("FEATURE TEST: An Airport", function() {

  var plane = new Plane();
  var airport = new Airport();

  it("can land a plane at a certain airport", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("can tell a plane to take-off from an airport", function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it("can stop a plane from taking off", function() {
    plane.land(airport);
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function(){ plane.takeoff(airport); }).toThrowError("Weather is shite; flights grounded");
  }) ;

  it("allows a plane to takeoff in good weather", function() {
    plane.land(airport);
    spyOn(airport, "isStormy").and.returnValue(false);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

});
