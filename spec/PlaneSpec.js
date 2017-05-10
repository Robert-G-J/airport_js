describe("A plane", function() {

  var plane = new Plane();
  var airport = jasmine.createSpyObj("airport", ["clearForLanding"]);

  describe("can land", function() {
      it("land with land message", function() {
        expect(plane.land).not.toBeUndefined();
      });

      it("at an airport", function() {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
      });


  });
});
