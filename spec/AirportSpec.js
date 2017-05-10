describe('UNIT TEST: An Airport', function() {

  airport = new Airport();
  plane = new Plane();
  var default_capacity = 1;

  it('has an array of planes', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can find out if it is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  it('can know its capacity', function() {
    expect(airport.planes.length >= 0).toBeTruthy();
    expect(airport.planes()).toBeLessThan(airport.capacity());
  });
});
