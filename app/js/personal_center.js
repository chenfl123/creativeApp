$(function() {
	$list = $(".List");
	$leia = $(".fenlei");

	$list.hide();
	$leia.on("click", function() {
		$list.slideToggle(500);
	})
})