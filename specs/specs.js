describe ('Pizza', function() {
  describe ('changePrice', function() {
  	it ("will tell what the price is for default properties", function(){
  	var pizzaTest = Object.create(Pizza);
  	expect(pizzaTest.price).to.equal(8);
  	});

  	it("will tell what the price is when the size is default but the type is pepperoni", function(){
  	var pizzaTest = Object.create(Pizza);
  	pizzaTest.type = "pepperoni";
  	pizzaTest.changePrice();
  	expect(pizzaTest.price).to.equal(9.50);	
  	});
  });
});
