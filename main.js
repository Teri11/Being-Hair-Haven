var main = function() {
	//Variables {
		var year = new Date().getFullYear();
		$('a[href^="http://"]').attr('target', '_blank');
		$('a[href^="https://"]').attr('target', '_blank');
	//}

	//NoScript effect {
		$(".noscript").hide();
	//}
	
	//Nav { 
		//$("body").toggleClass("show");
		//$(".show").click(function(e) {
			//e.preventDefault();
			//$("body").toggleClass("show");
		//});  
	//}

	//Copyright {
		$(".copyrights").append(year + " Whitelighting © All Rights Reserved.");
	//}
};

$(document).ready(main);