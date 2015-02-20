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