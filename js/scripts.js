// var size = $("#size").val();

// $(document).ready(function() {
//     $("#complete-order-btn").submit(function(event){
//         event.preventDefault();
//         var toppings = $("input:checkbox[toppings]:checked").map(function(){
//             return $(this).val();
//         }).get();
//         console.log(toppings);
//     });

// });

// Business Logic

function PizzaOrder() {
    this.pizzas = [],
    this.currentId = 0
    };
    
// Starts new individual pizza
function Pizza(toppings, size) {
    this.toppings = toppings,
    this.size = size,
    this.price = 10
    };
  
// Assign each pizza an Id
  
PizzaOrder.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
    };
  
// Add pizza to order
PizzaOrder.prototype.addPizza = function(pizza) {
    pizza.id = this.assignId();
    this.pizzas.push(pizza);
    };
  
// Add size of pizza
Pizza.prototype.addSize = function(size) {
    this.size = size;
    };
  
// Add toppings to pizza
Pizza.prototype.addToppings = function(toppings) {
    this.toppings = toppings;
    };
  
// Pizza price by size options
Pizza.prototype.priceBySize = function(size) {
    this.size = size;
    if(this.size === "small"){
        this.price;
    } else if (this.size === "medium") {
        this.price += 5;
    } else if (this.size === "large") {
        this.price += 7;
    } else {
        console.log("error for pizza size selection");
    }
    };
  
// Pizza price by toppings
Pizza.prototype.priceByToppings = function(topping) {
    if(topping === "pepperoni") {
        this.price += 1;
    } else if(topping === "canadian bacon") {
        this.price += 1;
    } else if (topping === "sausage") {
        this.price -= 1;
    } else if(topping === "beef") {
        this.price -= 1;
    }  else if (topping === "mushrooms") {
        this.price += 1;
    } else if(topping === "olives") {
        this.price += 1;
    } else if (topping === "mushrooms") {
        this.price  += 1;
    } else if (topping === "onions") {
        this.price += 1;
    } else if (topping === "peppers") {
        this.price += 1;
    } else {
        console.log("error for pizza topping selection");
    }
    }
  
// turn topping camelCase into text
Pizza.prototype.arrayDisplay = function() {
    this.toppings.toString();
    }

// User Interface Logic
$(document).ready(function() {
    var pizzaOrder = new PizzaOrder();
    $("form#pizza-maker").submit(function(event) {
        event.preventDefault();
        var pizza = new Pizza();
        var size = $(this.size).val();
        pizza.priceBySize(size);
        pizzaOrder.addPizza(pizza);
        var toppings = [];
        $.each($("input:checkbox[name=topping]:checked"), function() {
            toppings.push($(this).val());
        });
        pizza.addToppings(toppings);
        for (var i = 0; i < pizza.toppings.length; i++) {
                pizza.priceByToppings(toppings[i]);
        };
        $("form#pizza-maker").hide();
        $("div#order-confirmation").show();
        $("p#toppings-confirm").append("You ordered a " + $("#size").children("option:selected").text() + " pizza with " + pizza.toppings.toString() + ".");
        $("span#total-price").text(pizza.price);
    });
});




