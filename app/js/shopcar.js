document.addEventListener('DOMContentLoaded', function() {

    var $shoplist = $('.shop_content');
    var pay =$('.pay');
    var paynumber =0;
    var shopString = localStorage.getItem('shopString');
    shopString = shopString ? JSON.parse(shopString) : [];

// 创建购物车列表
    var $ul =$('<ul/>').addClass('list');
     $.each(shopString,function(idx, item) {
       if (item.id!=null) {
        // 总价格
        paynumber += parseInt(item.price);
      	var $li =$('<li/>');
      	var $input =$('<input type="checkbox" id="checks" class="checksome"/>');
       var $img =$('<img id='+item.id+' src='+item.imgurl+' alt='+item.title+'/>');  
 var $div =$('<div/>').addClass('conf').html('<p class="title">'+item.title+'</p><p class="price">&yen;<span>'+item.price+'</p>')
       //             
       var $p =$('<p/>').addClass('last').html('<a class="reduce" href="#">-</a><input type="text" size="2" value='+item.number+'><a href="#" class="add">+</a><a href="#" class="iconfont icon-shanchu delete"></a> ');   
       $li.append($input);
       $li.append($img);
       $li.append( $div);
       $li.append($p);
       $li.appendTo($ul);
       }
    })
  $shoplist.append($ul);


// 减少数量
$('.reduce').on('singleTap',function(){
  var index=$(this).closest('li').index();
  if(shopString[index].number==1){
     shopString[index].number=1;
  }else {
     shopString[index].number -=1;
    localStorage.setItem('shopString',JSON.stringify(shopString));
  }
})

// 增加数量
$('.add').on('singleTap',function(){
  var index=$(this).closest('li').index();
     shopString[index].number +=1;
    localStorage.setItem('shopString',JSON.stringify(shopString));
  
})
// 删除商品
$('.delete').on('singleTap',function(){
  var index=$(this).closest('li').index();
     shopString.splice(index,1);
    localStorage.setItem('shopString',JSON.stringify(shopString));
})

// 全选按钮
var $checked =$('.checksome').prop("checked",true); 
   pay.html(paynumber);
   
$('.checkall').on('singleTap',function(){
  $checked.prop("checked",$(this).prop("checked"));
  if ($(this).prop("checked")) {
      pay.html(paynumber);
    }else{
       pay.html(00);
    }
})
$.each($checked,function(idx,item){
  $(this).on('singleTap',function(){
     pay.html(shopString[idx].price);
  })

})
 
// 
})
