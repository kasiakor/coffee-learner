$(document).ready(function() {
	$('button').click(function() {
		var coffeeType = $('#priceTypeId').val();
		var coffeeNumber =$('#numberId').val();
		var result = $('#resultId');
		
		if(coffeeType != "None" && coffeeNumber >=0 && coffeeNumber !== "" ) {
			result.val((coffeeType * coffeeNumber).toFixed(2));
		}
		else if (coffeeNumber < 0) {
			alert ("Please put the positive number");
		}
		else if (coffeeNumber == "") {
			 alert ("Please put the number");
		}
		else {
			alert("Please select coffee");
		}
 	});
});