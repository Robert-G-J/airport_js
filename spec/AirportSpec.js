describe('Aiport', function() {

  airport = new Airport();

  it('has an array of planes', function() {
    expect(airport.planes()).toEqual([]);
  });
  
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
