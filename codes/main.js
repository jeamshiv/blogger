$(document).ready(function (event) {


	$("#share-btn-jeamshiv button").click(function (event) {
		var temp_title = document.title;
		title = temp_title.replace(/ /g, '+');

		window.location.href=`whatsapp://send?text=window.location.href ${title}`;
	})

});//ready end
