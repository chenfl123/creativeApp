$(function() {
	$del = $(".dingdan .fukan .del");
	$zhifu = $(".dingdan .fukan .zhifu");
	$wuliu = $(".dingdan .fukan .wuliu");
	$fix = $(".fix");
	$list = $(".List");
	$leid = $(".fenleic");
	//删除订单
	$del.on("click", function() {
		$(this).closest("section").slideUp();
	});
	$zhifu.on("click", function() {
		alert("银联支付");
	});
	$wuliu.on("click", function() {
		alert("暂无物流信息");
	});
	//计算价格
	$heji = $(".dingdan .heji .he span");
	$heji.each(function() {
		$a_ = $(this).closest(".heji").prev(".shangpin").find(".jiage span").text();
		$b_ = $(this).closest(".heji").prev(".shangpin").find(".shuliang span").text();
		$(this).text($a_ * $b_)
	});
	//点击回到顶部
	$fix.hide();
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$fix.show(1000);
		} else {
			$fix.hide(1000);
		}
	});
	$fix.on("click", function() {
		$("body").animate({
			scrollTop: 0
		}, 500);
	})
	//点击菜单
	$list.hide();
	$leid.on("click", function() {
		$list.slideToggle(500);
	})
})