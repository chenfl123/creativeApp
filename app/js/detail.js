Zepto(function($){
  var $addcar= $('.addcar');
  var $number =$('.number');
  var $pay =$('.pay');
  var shopString= localStorage.getItem('shopString');
  shopString=shopString ?JSON.parse(shopString):[];
	$addcar.on('singleTAB',function(){
		var goods={};
		// goods.id=$('.d_show').find('img').nodeName;
		console.log($('.d_show').find('img').nodeName);

	})

})