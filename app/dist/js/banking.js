document.addEventListener("DOMContentLoaded",function(){
	
	$.ajax({
		type:"get",
		url:"../dist/js/records.json",
		dataType:"json",
		async:true,
		success:function(res){
			console.log(res);
			var $ul=$("#tabs ul");
			var $li=$("<li/>");
			$.each(res, function(idx,item) {    
                 var $span1=$("<span/>");                 
                 $span1.html(item.status).appendTo($li);
               
               var $span2=$("<span/>");
                 $span2.html(item.residue).appendTo($li);
                 
                 var $span3=$("<span/>");
                 $span3.html(item.remark).appendTo($li);
                 
                 var $span4=$("<span/>");
				$span4.html(item.udtime).appendTo($li);
			});			
			$li.appendTo($ul);
			$ul.appendTo($("#tabs"));
		}
		
	});
});