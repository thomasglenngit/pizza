function Pizza(size, crust, cheese, toppings) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function() {
  let pizzaTotal = this.size + this.crust + this.cheese 
  this.toppings.forEach((element) => {
    pizzaTotal += parseInt(element);
  });
  return pizzaTotal;
}

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    const size = parseInt($("#size").val());
    const crust = parseInt($("#crust").val());
    const cheese = parseInt($("#cheese").val()); 
    const pizzaToppings = [];
    $('input[type="checkbox"]:checked').each(function() { 
      pizzaToppings.push($(this).val()); 
    });

    const name = $("#name").val();
    const address = $("#address").val();

    let newPizza = new Pizza(size, crust, cheese, pizzaToppings);

    $(".name").text(name);
    $(".address").text(address);

    newPizza.pizzaPrice();
    $(".price").text(newPizza.pizzaPrice());
    $("#output").show();
    $("#orderForm").hide();
    $(".well").hide();
  });
});
