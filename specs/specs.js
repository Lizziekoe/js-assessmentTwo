describe ('Pizza', function() {
  describe ('changePrice', function() {
  	it ("will tell what the price is for default properties", function(){
  	var pizzaTest = Object.create(Pizza);
  	expect(pizzaTest.price).to.equal(8);
  	});
  });
});
