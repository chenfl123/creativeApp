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