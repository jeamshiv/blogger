$(document).ready(function (event) {

		//alert("hi there");
		var temp_title = document.title;
		titles = temp_title.replace(/ /g, '+');
		var link = window.location.href;

		$(".wp-shareshiv").click(function (event) {
		if($(window).width()> 768){
		window.location.href=`https://api.whatsapp.com/send?text=${link} %0a${title}`;} else{window.location.href=`whatsapp://send?text=${link} %0a${titles}`;}
		});



		$(".fb-shareshiv").click(function(event){
			window.location.href=`https://www.facebook.com/sharer/sharer.php?u=${link}`;
		});

	});//ready