$(document).ready(function() {
	$('#game button').click(function() {
		var coffee = $('#coffee').val();
		var milk =$('#milk').val();
		var result = $('#game-result');
		
		if(coffee === "1" && milk === "0" ) {
			result.val("Espresso");
		}
		else if (coffee ==="2" && milk === "0") {
			result.val("Double espresso");
		}
		else if (coffee === "1" && milk === "1") {
			 result.val("Cortado");
		}
		else if (coffee === "1" && milk === "2") {
			 result.val("Caffe Latte");
		}
		else if (coffee === "2" && milk === "1") {
			 result.val("Cappuccino");
		}
		else if (coffee === "2" && milk === "2") {
			 result.val("Strong Caffe Latte :)");
		}
  	});
});