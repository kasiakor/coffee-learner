$(document).ready(function() {
	$('#game button').click(function() {
		var coffee = $('#coffee').val();
		var milk =$('#milk').val();
		var gameResult = $('#game-result');
		var coffeeImage = $("#coffee-image");
		
		if(coffee === "1" && milk === "0" ) {
			gameResult.val("Espresso");
			coffeeImage.html("<img src='Images/espresso-result.jpg' />");
		}
		else if (coffee ==="2" && milk === "0") {
			gameResult.val("Double espresso");
			coffeeImage.html("<img src='Images/espresso-result.jpg' />");
		}
		else if (coffee === "1" && milk === "1") {
			 gameResult.val("Cortado");
			 coffeeImage.html("<img src='Images/cortado-result.jpg' />");
		}
		else if (coffee === "1" && milk === "2") {
			 gameResult.val("Caffè Latte");
			 coffeeImage.html("<img src='Images/caffelatte-result.jpg' />");
		}
		else if (coffee === "2" && milk === "1") {
			 gameResult.val("Cappuccino");
			 coffeeImage.html("<img src='Images/cappuccino-result.jpg' />");
		}
		else if (coffee === "2" && milk === "2") {
			 gameResult.val("You've created a new coffee!");
			 coffeeImage.html("<img src='Images/newcoffee-result.jpg' />");
		}
	});
});
