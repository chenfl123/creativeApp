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
<<<<<<< HEAD
    

  var $addcar= $('.addcar');
  var $number =$('.number');
  var $pay =$('.pay'); 

  var shopString= localStorage.getItem('shopString');
  shopString=shopString ?JSON.parse(shopString):[];

//arr数组收集所有商品id
  var arr=[];
// carnum购物车数量

  var carnum=0;
  if (shopString!=[]) {
  	 $.each(shopString,function(idx, item){
  		arr.push(item.id);
  		carnum +=parseInt(item.number);
  	})
  }

  	$number.html(carnum);

  	// 加入购物车设置数据

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

		//点击菜单事件
//	$list = $(".list");
//	$lei = $(".fenlei");
//
//	$list.hide();
//	$lei.on("click", function() {
//		$list.slideToggle(500);
//		console.log("hah");
//	});

})	
=======


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
>>>>>>> aa3b18ccb938a1fc020cd63dc69e26e319f45df3
