var size = $("#size").val();

$(document).ready(function() {
    $("#complete-order-btn").submit(function(event){
        event.preventDefault();
        var toppings = $("input:checkbox[toppings]:checked").map(function(){
            return $(this).val();
        }).get();
        console.log(toppings);
    });

});






