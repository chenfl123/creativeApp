




document.addEventListener("DOMContentLoaded",function(){
	
	
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
    
	
	
	
	
})