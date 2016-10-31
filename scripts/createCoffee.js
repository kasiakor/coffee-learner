$(document).ready(function() {
	$('#game button').click(function() {
		var coffee = $('#coffee').val();
		var milk =$('#milk').val();
		var result = $('#game-result');
		
		if(coffee === "1" && milk === "0" ) {
  			result.val("Espresso");
  			$("#coffee-image").html("<img src='Images/espresso-result.jpg'"+"alt='description' />");
  		}
  		else if (coffee ==="2" && milk === "0") {
  			result.val("Double espresso");
  			$("#coffee-image").html("<img src='Images/espresso-result.jpg'"+"alt='description' />");
  		}
  		else if (coffee === "1" && milk === "1") {
  			 result.val("Cortado");
  			 $("#coffee-image").html("<img src='Images/cortado-result.jpg'"+"alt='description' />");		 
  		}
  		else if (coffee === "1" && milk === "2") {
  			 result.val("Caffe Latte");
  			 $("#coffee-image").html("<img src='Images/caffelatte-result.jpg'"+"alt='description' />");
  		}
  		else if (coffee === "2" && milk === "1") {
  			 result.val("Cappuccino");
  			 $("#coffee-image").html("<img src='Images/cappuccino-result.jpg'"+"alt='description' />");
  		}
  		else if (coffee === "2" && milk === "2") {
  			 result.val("Strong Caffe Latte");
  			 $("#coffee-image").html("<img src='Images/caffelatte-result.jpg'"+"alt='description' />");
  		}
  	});
});