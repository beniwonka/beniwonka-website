


$(document).ready(function(){
	$(".buttonGraph").click(function(){
		var value = $(this).attr("data-filter");
		if (value == "allGraph")
		{
			$(".filtergraph").slideDown("slow");
		}
		else 
		{
			$(".filtergraph").not("."+value).slideDown("slow");
			$(".filtergraph").filter("."+value).slideUp("slow");
		}

		$("div .buttonGraph").click(function(){
			$(this).addClass('activeGraph').siblings().removeClass('activeGraph');
		})

	})

	$(".buttonPhoto").click(function(){
		var value = $(this).attr("data-filter");
		if (value == "allPhoto")
		{
			$(".filterphoto").slideDown("slow");
		}
		else 
		{
			$(".filterphoto").not("."+value).slideDown("slow");
			$(".filterphoto").filter("."+value).slideUp("slow");
		}

		$("div .buttonPhoto").click(function(){
			$(this).addClass('activePhoto').siblings().removeClass('activePhoto');
		})

})

})

$( "[onClick]" ).css('cursor', 'pointer');