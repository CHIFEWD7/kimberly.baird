// Create a global variable for the total - total will store running total at 0
   var total = 0;
   var number = 0;

// When the user submits the form, run the `enter` function
//$('#entry').submit(enter);
// Create a function you can run when you submit the field Hint: .submit() in jQuery


// $('btn').keypress(){
// 	var input =$('field').val();
// 	addTotal(input);
// 	}

function addNew (number){
	
	total = (parseFloat(number)+ parseFloat(total));
	return total;
};

function currency(num){
	var parsed = parseFloat(num)
	number = parsed.toFixed(2);
}


$("#entry").submit(function(){
	// Clear the input
	var input = $("#newEntry").val();

	addNew(input);
	currency(input);
	$('#entries').append("<tr><td>&dollar;" + number + "<tr><td>");


	//console.log(total);

$("#total").html("&dollar;" + total);
return false;

	//console.log("Enter was pressed");
});

function resetInput(){
	$("#newEntry").val();
}
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements



