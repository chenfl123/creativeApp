$(function() {
	$list = $(".list");
	$lei = $(".icon-iconfenlei");

	$list.hide();
	$lei.on("click", function() {
		$list.slideToggle(500);
	})
})