


document.addEventListener('DOMContentLoaded',function(){



	
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
    

  var $addcar= $('.addcar');
  var $number =$('.number');
  var $pay =$('.pay'); 

  var shopString= localStorage.getItem('shopString');
  shopString=shopString ?JSON.parse(shopString):[];

  var arr=[];

  var carnum=0;
  if (shopString!=[]) {
  	 $.each(shopString,function(idx, item){
  		arr.push(item.id);
  		carnum +=parseInt(item.number);
  	})
  }

  	$number.html(carnum);

  
	$addcar.on('singleTap',function(){
		var goods={};
		var Id =$('.d_show img').attr('id');
		var numb=1;

		for(var i=0;i<arr.length;i++){
			numb=shopString[i].number;
		if (arr[i]==Id) {
			shopString.splice(i,1);
			numb=numb+1;
			break;

			}else{numb=1;}
		}
		goods.id=Id;
		goods.number=numb;
		goods.title=$('.d_show img').attr('alt');
		goods.price=$('.detail .price span').html();
		goods.imgurl=$('.d_show img').attr('src');
	
		shopString.push(goods); 
		localStorage.setItem('shopString',JSON.stringify(shopString));
	})

	
})	
