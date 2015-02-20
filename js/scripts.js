var Pizza = {pizzaSize: 10, pizzaType: "cheese", price: 8, slices: 5};
Pizza.manySlices = function() {
  this.slices = Math.ceil(this.pizzaSize/2);
};


Pizza.changePrice = function() {
  if (this.pizzaType = "pepperoni") {
  this.price = this.price + 1.5;
  }
  if(this.pizzaSize > 10) {
    this.price = this.price + this.pizzaSize/4;
  }
  else if (this.pizzaSize < 10) {
    this.price = this.pizzaSize/2 + 2;
  }
};


$(function() {
  $("#pizzaType").submit(function(event){
    var newPizza = Object.create(Pizza);
    newPizza.pizzaSize = parseFloat($("#pizzaSize").val()); 
    newPizza.pizzaType = $('#type').val();
    newPizza.changePrice();
    newPizza.manySlices();
    $("#pizzaCost").empty();
    $("#pizzaSize").val("");
    $("#pizzaCost").text(newPizza.price);
    $("#pizzaSlices").text(newPizza.slices + ' Slices In It');
    $("#results").show();
  	event.preventDefault();
  });
});
