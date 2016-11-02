


<<<<<<< HEAD
 var mySwiper2 = new Swiper('.swiper-container', {
            // 自动播放
            autoplay: 5000,
          
            loop: true,
          
        });
=======
document.addEventListener('DOMContentLoaded',function(){


>>>>>>> 2bb74964e39cb5d132d0fcc4f84b6ca7825b474d

	
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
<<<<<<< HEAD
//arr数组收集所有商品id
  var arr=[];
// carnum购物车数量
=======

  var arr=[];

>>>>>>> 2bb74964e39cb5d132d0fcc4f84b6ca7825b474d
  var carnum=0;
  if (shopString!=[]) {
  	 $.each(shopString,function(idx, item){
  		arr.push(item.id);
  		carnum +=parseInt(item.number);
  	})
  }

  	$number.html(carnum);

<<<<<<< HEAD
  	// 加入购物车设置数据
=======
  
>>>>>>> 2bb74964e39cb5d132d0fcc4f84b6ca7825b474d
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
