describe ('Pizza', function() {
  describe ('manySlices', function() {
    it ("will tell how many slices based off pizzaSize", function(){
    var pizzaTest = Object.create(Pizza);
    pizzaTest.pizzaSize = 12;
    pizzaTest.manySlices();
    expect(pizzaTest.slices).to.equal(6); 
    });
  });

  describe ('changePrice', function() {
  	it ("will tell what the price is for default properties", function(){
  	var pizzaTest = Object.create(Pizza);
  	expect(pizzaTest.price).to.equal(8);
  	});

  	it("will tell what the price is when the size is default but the type is pepperoni", function(){
  	var pizzaTest = Object.create(Pizza);
  	pizzaTest.pizzaType = "pepperoni";
  	pizzaTest.changePrice();
  	expect(pizzaTest.price).to.equal(9.50);	
  	});

  	it("will calculate cost based off number of inches over 10", function(){
  	var pizzaTest = Object.create(Pizza);
  	pizzaTest.pizzaSize = 15;
  	pizzaTest.changePrice();
  	expect(pizzaTest.price).to.equal(13.25);
  	});

  	it("will calculate cost based off number of inches under 10", function(){
  	var pizzaTest = Object.create(Pizza);
  	pizzaTest.pizzaSize = 5;
  	pizzaTest.changePrice();
  	expect(pizzaTest.price).to.equal(4.5);
  	});
  });
});
