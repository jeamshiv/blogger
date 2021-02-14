
$(document).ready(function (event) {

	//lazy loading
document.addEventListener("DOMContentLoaded",function(){var e=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){let n=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),n.unobserve(t)}})});e.forEach(function(e){n.observe(e)})}});
//end
	

		//alert("hi there");
		var temp_title = document.title;
		titles = temp_title.replace(/ /g, '+');
		var link = window.location.href;

		$(".wp-shareshiv").click(function (event) {
		window.location.href=`whatsapp://send?text=${link} %0a${titles}`;
		});

		$(".fb-shareshiv").click(function(event){
			window.location.href=`https://www.facebook.com/sharer/sharer.php?u=${link}`;
		});

	});//ready