document.addEventListener("DOMContentLoaded",function(){
	//加载金库内容
	$.ajax({
		type:"get",
		url:"../json/records.json",
		dataType:"json",
		async:true,
		success:function(res){
			console.log(res);
			var $ul=$("#tabs ul");
			
			$.each(res, function(idx,item) {
				var $li=$("<li/>");
                 var $span1=$("<span/>");                 
                 $span1.html(item.status).appendTo($li);
               
               var $span2=$("<span/>");
                 $span2.html(item.residue).appendTo($li);
                 
                 var $span3=$("<span/>");
                 $span3.html(item.remark).appendTo($li);
                 
                 var $span4=$("<span/>");
				$span4.html(item.udtime).appendTo($li);
				
				$li.appendTo($ul);
			});			
			
			$ul.appendTo($("#tabs"));
		}
		
	});
	
	//点击菜单事件
	$list = $(".llist");
	$leit = $(".fenlei");

	$list.hide();
	$leit.on("click", function() {
		$list.slideToggle(500);
		 
	});

	
});


document.addEventListener("DOMContentLoaded",function(){
	//遍历内容
	$.ajax({
		type:"get",
		url:"../json/comment.json",
		dataType:"json",
		async:true,
		success:function(res){
			 
			var $ul=$(".comment ul");
			var geshu=0;
			
			$.each(res, function(idx,item) {    
                var $li=$("<li/>");
                 var $div=$("<div/>");
                 $("<span/>").html('<img src="../'+item.userImg_pic+'"/>').appendTo($div);
                 $("<em/>").html(item.userName).appendTo($div);
                 $("<p/>").html(item.addTime).appendTo($div.addClass("comment_user").appendTo($li));
                 
                 var start=$("<span/>").addClass("icon iconfont").html("&#x3483;");
                 geshu=parseInt(item.star);
                 $("<p/>").addClass("star").html(start).appendTo($li);
                 $("<p/>").addClass("comment_text").html(item.comment).appendTo($li);
                 $("<span/>").addClass("shopTime").html("购买日期:"+item.shopTime).appendTo($li);
                 
                 $li.appendTo($ul);
			});			
//			$ul.empty();			
			$ul.appendTo($(".comment"));
		}
		
	});
	//懒加载
//	$(window).on("scroll",function(){
//		var scrolltop=$(window).scrollTop();
//		if(scrolltop>=$(document).height()-$(window).height()-100){
//			$.ajax();
//		}
//	})

    //切换
    $(".container-fluid .title span").first().on("click",function(){
    	console.log("你妹");
    	$(this).siblings().removeClass("active");
    	$(this).first().addClass("active");
    });
     $(".container-fluid .title span").last().on("click",function(){
    	console.log("我妹");
    	$(this).siblings().removeClass("active");
    	$(this).last().addClass("active");
    	
    });
   
// 	//点击菜单事件
	$list = $(".List");
	$leis = $(".fenlei");

//	$list.hide();
	$leis.on("click", function() {
		$list.toggle();

	});

});

document.addEventListener('DOMContentLoaded', function() {
    // 商品轮播图
    var mySwiper2 = new Swiper('.swiper-container', {
        // 自动播放
        autoplay: 5000,
        loop: true,

    });

    //切换
    $(".container-fluid .title span").first().on("singleTap", function() {

        $(this).siblings().removeClass("active");
        $(this).first().addClass("active");

    });
    $(".container-fluid .title span").last().on("singleTap", function() {

        $(this).siblings().removeClass("active");
        $(this).last().addClass("active");

    });



    var $addcar = $('.addcar');
    var $number = $('.number');
    var $pay = $('.pay');



    //arr数组收集所有商品id
    var arr = [];
    var carnum = 0;
    // carnum购物车数量
    var shopString = localStorage.getItem('shopString');
    shopString = shopString ? JSON.parse(shopString) : [];
    if (shopString != []) {
        $.each(shopString, function(idx, item) {
            arr.push(item.id);
            carnum += parseInt(item.number);
        })
    }
rest();
    $number.html(carnum);

   
    // 加入购物车设置数据

    $addcar.on('singleTap', function() {
      rest();
        var goods = {};
        var Id = $('.d_show img').attr('id');
        var numb = 1;

        for (var i = 0; i < arr.length; i++) {

            if (arr[i] == Id) {
                numb = shopString[i].number + 1;
                shopString.splice(i, 1);

                break;
            }
        }

        goods.id = Id;
        goods.number = numb;
        goods.title = $('.d_show img').attr('alt');
        goods.price = $('.detail .price span').html();
        goods.imgurl = $('.d_show img').attr('src');

        shopString.push(goods);
        localStorage.setItem('shopString', JSON.stringify(shopString));
        // 实时更新购物车数目
        $number.html(++carnum);
    })

 function rest() {
      arr.length=0;
      carnum=0;
        var shopString = localStorage.getItem('shopString');
        shopString = shopString ? JSON.parse(shopString) : [];
        if (shopString != []) {
            $.each(shopString, function(idx, item) {
                arr.push(item.id);
                carnum += parseInt(item.number);
            })
        }

    }

})


$(document).on("pageinit","#pagehome",function(){
	var mySwiper = new Swiper('#main_swiper',{
		direction : 'horizontal',
		pagination : '.swiper-pagination',
		loop:true,
		autoplay : 3000
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
	
	
// })
// $(document).ready(function(){
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
$(function() {
	$name = $("section>p>.name");
	$phone = $("section>p>.phone");
	$sheng = $("section>.dizhi>div>.sheng");
	$shi = $("section>.dizhi>div>.shi");
	$xian = $("section>.dizhi>div>.xian");
	$dizhi = $("section>.dizhi>div>input");
	$btn = $(".sub button");
	$list = $(".Listss");
	$leis = $(".fenleit");

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

	$leis.on("click", function() {
		$list.slideToggle(500);
	});
})
$(function() {
	$list = $(".List");
	$leia = $(".fenlei");

	$list.hide();
	$leia.on("click", function() {
		$list.slideToggle(500);
	})
})
document.addEventListener('DOMContentLoaded', function() {

    var $shoplist = $('.shop_content');
    var pay =$('.pay');
    var paynumber =0;
    var shopString = localStorage.getItem('shopString');
    shopString = shopString ? JSON.parse(shopString) : [];
    
// 创建购物车列表
    var $ul =$('<ul/>').addClass('list');
     $.each(shopString,function(idx, item) {
       if (item.id!=null) {
        
        // 总价格
        paynumber += parseInt(item.price);
      	var $li =$('<li/>');
      	var $input =$('<input type="checkbox" id="checks" class="checksome"/>');
       var $img =$('<img id='+item.id+' src='+item.imgurl+' alt='+item.title+'/>');  
 var $div =$('<div/>').addClass('conf').html('<p class="title">'+item.title+'</p><p class="price">&yen;<span>'+item.price+'</p>')
       //             
       var $p =$('<p/>').addClass('last').html('<a class="reduce" href="#">-</a><input type="text" size="2" value='+item.number+'><a href="#" class="add">+</a><a href="#" class="iconfont icon-shanchu delete"></a> ');   
       $li.append($input);
       $li.append($img);
       $li.append( $div);
       $li.append($p);
       $li.appendTo($ul);
       }
    })
  $shoplist.append($ul);


// 减少数量
$('.reduce').on('singleTap',function(){
  var index=$(this).closest('li').index();
  if(shopString[index].number==1){
     shopString[index].number=1;
   
  }else {
     shopString[index].number -=1;
  $(this).siblings('input').val(shopString[index].number);
    localStorage.setItem('shopString',JSON.stringify(shopString));
  }
})

// 增加数量
$('.add').on('singleTap',function(){
  var index=$(this).closest('li').index();
     shopString[index].number +=1;
     $(this).siblings('input').val(shopString[index].number)
    localStorage.setItem('shopString',JSON.stringify(shopString));
  
})
// 删除商品
$('.delete').on('singleTap',function(){
  var index=$(this).closest('li').index();
     shopString.splice(index,1);
    localStorage.setItem('shopString',JSON.stringify(shopString));
    $(this).closest('li').remove();
})

// 全选按钮
var $checked =$('.checksome').prop("checked",true); 
   pay.html(paynumber);
   
$('.checkall').on('singleTap',function(){
  $checked.prop("checked",$(this).prop("checked"));
  if ($(this).prop("checked")) {
      pay.html(paynumber);
    }else{
       pay.html(00);
    }
})
$.each($checked,function(idx,item){
  $(this).on('singleTap',function(){
     pay.html(shopString[idx].price);
  })

})
 
// 
})
