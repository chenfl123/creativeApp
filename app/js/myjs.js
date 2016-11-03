$(document).on("pageinit","#pagehome",function(){
	var mySwiper = new Swiper('#main_swiper',{
		direction : 'horizontal',
		pagination : '.swiper-pagination',
		loop:true,
		autoplay : 3000,
	})
	//首页商品展示懒加载一
	var $pagehome_show = $('.pagehome_show');
	var $ul1 = $('<ul class="pagehome_showlist"></ul>');
	$.ajax({
			type:"get",
			async:false,
			url:'../json/pagehome.json',
			success:function(res){
			console.log(res);
			$.each(res,function(idx,item){
				var $li1 = $('<li/>').html('<img src="'+item.imgurl+'"/>');					
				$li1.appendTo($ul1);
			});
			$pagehome_show.append($ul1);
		}
	});
	//首页商品展示懒加载二
	var $ul2 = $('<ul class="pagehome_showlist2"></ul>');
	$.ajax({
			type:"get",
			async:true,
			url:'../json/pagehome2.json',
			success:function(res){
			console.log(res);
			$.each(res,function(idx,item){
				var $li2 = $('<li/>').html('<img data-original="'+item.imgurl+'"/>');					
				$li2.appendTo($ul2);
			});
			$pagehome_show.append($ul2);
			$("img").lazyload({
				effect:"fadeIn"
			})
		}
	});	
	//首页商品展示懒加载三
	var $ul3 = $('<ul class="pagehome_showlist3"></ul>');
	$.ajax({
			type:"get",
			async:true,
			url:'../json/pagehome3.json',
			success:function(res){
			console.log(res);
			$.each(res,function(idx,item){		
				var $li3 = $('<li/>');
//				var $img = $('<img/>').attr({src:item.imgurl})
				var $img = $('<img data-original="'+item.imgurl+'"/> ')
				var $p1  = $('<p/>').html("津率享红华宁香平衡液 150ml")
				var $p2  = $('<p/>').html("￥120")
				$img.appendTo($li3)
				$p1.appendTo($li3)
				$p2.appendTo($li3)
				$li3.appendTo($ul3);
			});
			$pagehome_show.append($ul3);
			$("img").lazyload({
				effect:"fadeIn"
			})
		}
	});
	
	
})
$(document).ready(function(){
	$(".iconback").hide()
	$(window).scroll(function(){
		console.log($(window).scrollTop())
		if($(window).scrollTop()>200)
		{
			$(".iconback").show()
		}else{
			$(".iconback").fadeOut()
		}
		$(".iconback").click(function(){
			$(window).scrollTop(0)
		})
	})
})
