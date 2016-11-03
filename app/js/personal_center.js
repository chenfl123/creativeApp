$(function() {
	$list = $(".list");
	$lei = $(".fenlei");

	$list.hide();
	$lei.on("click", function() {
		$list.slideToggle(500);
	})
})