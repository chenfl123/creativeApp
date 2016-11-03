

document.addEventListener("DOMContentLoaded",function(){
	//遍历内容
	$.ajax({
		type:"get",
		url:"../dist/js/comment.json",
		dataType:"json",
		async:true,
		success:function(res){
			console.log(res);
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
//	$list = $(".list");
//	$lei = $(".fenlei");
//
//	$list.hide();
//	$lei.on("click", function() {
//		$list.slideToggle(500);
//		console.log("hah");
//	});

});
