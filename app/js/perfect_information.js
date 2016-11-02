$(function() {
	$name = $("section>p>.name");
	$phone = $("section>p>.phone");
	$sheng = $("section>.dizhi>div>.sheng");
	$shi = $("section>.dizhi>div>.shi");
	$xian = $("section>.dizhi>div>.xian");
	$dizhi = $("section>.dizhi>div>input");
	$btn = $(".sub button");
	$list = $(".list");
	$lei = $(".icon-iconfenlei");

	$name.on("blur", function() {
		if($name.val() == "") {
			$name.val("请输入您的昵称!");
			$name.addClass("active");
		} else if($name.val() !== "请输入您的昵称!") {
			$name.removeClass("active");
		}
	});
	$phone.on("blur", function() {
		if($phone.val() == "") {
			$phone.val("请输入您的手机号!");
			$phone.addClass("active");
		} else if(!/^[1]\d{10}$/.test($phone.val())) {
			$phone.val("请输入正确手机号!");
			$phone.addClass("active");
		} else {
			$phone.removeClass("active");
		}
	});
	$sheng.on("blur", function() {
		if($sheng.val() == "选择省") {
			$sheng.addClass("active");
		} else {
			$sheng.removeClass("active");
		}
	});
	$shi.on("blur", function() {
		if($shi.val() == "选择市") {
			$shi.addClass("active");
		} else {
			$shi.removeClass("active");
		}
	});
	$xian.on("blur", function() {
		if($xian.val() == "选择区/县") {
			$xian.addClass("active");
		} else {
			$xian.removeClass("active");
		}
	});
	$dizhi.on("blur", function() {
		if($dizhi.val() == "") {
			$dizhi.val("请输入您的地址!")
			$dizhi.addClass("active");
		} else if($dizhi.val() !== "请输入您的地址!") {
			$dizhi.removeClass("active");
		}
	});

	$btn.on("click", function() {
		var is = ($name.val() == "") || ($name.val() == "请输入您的昵称!") || ($phone.val() == "") || ($phone.val() == "请输入您的手机号!") || ($phone.val() == "请输入正确手机号!") || ($sheng.val() == "选择省") || ($shi.val() == "选择市") || ($xian.val() == "选择区/县") || ($dizhi.val() == "") || ($dizhi.val() == "请输入您的地址!");
		if(is) {
			alert("请完善信息")
		} else {
			alert("提交成功")
		}
	});

	$list.hide();
	//				$(window).on("click",function(){
	//					$list.hide(500);
	//				})
	$lei.on("click", function() {
		$list.slideToggle(500);
	});
})