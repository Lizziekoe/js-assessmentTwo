var Pizza = {pizzaSize: 10, pizzaType: "cheese", price: 8};
Pizza.changePrice = function() {
  if (this.pizzaType = "pepperoni") {
  this.price = this.price + 1.5;
  }
  if(this.pizzaSize > 10) {
    this.price = this.price + this.pizzaSize/4;
  }
  else if (this.pizzaSize < 10) {
    this.price = this.price/2;
  }
};


$(function() {
  $("#pizzaType").submit(function(event){
  	event.preventDefault();
    var newPizza = Object.create(Pizza);
    newPizza.pizzaSize = parseFloat($("#pizzaSize").val()); 
    newPizza.pizzaType = $('#type').val();
    newPizza.changePrice();
    $("#pizzaCost").empty();
    $("#pizzaCost").text(newPizza.price);
  });
});
