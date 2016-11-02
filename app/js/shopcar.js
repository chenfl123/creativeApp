document.addEventListener('DOMContentLoaded', function() {

    var $shoplist = $('.shop_content');

    var shopString = localStorage.getItem('shopString');
    shopString = shopString ? JSON.parse(shopString) : [];

// 创建购物车列表
    var $ul =$('<ul/>').addClass('list');
     $.each(shopString,function(idx, item) {
       if (item.id!=null) {
      	var $li =$('<li/>');
      	var $input =$('<input type="checkbox" id="checks"/>');
       var $img =$('<img id='+item.id+' src='+item.imgurl+' alt='+item.title+'/>');  
 var $div =$('<div/>').addClass('conf').html('<p class="title">'+item.title+'</p><p class="price">&yen;<span>'+item.price+'</p>')
       //             
       var $p =$('<p/>').addClass('last').html('<span>-</span><input type="text" size="2" value='+item.number+'><span>+</span><span class="iconfont icon-shanchu"></span> ');   
       $li.append($input);
       $li.append($img);
       $li.append( $div);
       $li.append($p);
        $li.appendTo($ul);
       }
    })
  $shoplist.append($ul);





})
