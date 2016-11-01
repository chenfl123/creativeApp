

document.addEventListener("DOMContentLoaded",function(){
	$.ajax({
		type:"get",
		url:"../dist/js/comment.json",
		dataType:"json",
		async:true,
		success:function(res){
			console.log(res);
			var $ul=$(".comment ul");
			var $li=$("<li/>");
			$.each(res, function(idx,item) {    
                 console.log("hahh");
                 var $div=$("<div/>");
                 $("<span/>").html('<img src="../'+item.userImg_pic+'"/>').appendTo($div);
                 $("<em/>").html(item.userName).appendTo($div);
                 $("<p/>").html(item.addTime).appendTo($div.addClass("comment_user").appendTo($li));
                 
                 
                 $("<p/>").addClass("star").html(item.star).appendTo($li);
                 $("<p/>").addClass("comment_text").html(item.comment).appendTo($li);
                 $("<span/>").addClass("shopTime").html("购买日期"+item.shopTime).appendTo($li);
                 
                 $li.appendTo($ul);
			});			
//			$ul.empty();			
			$ul.appendTo($(".comment"));
		}
		
	});
})
