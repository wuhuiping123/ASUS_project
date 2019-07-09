window.onload = function(){
	
	//清空文本框内容
	$('#clearInput').click(function(){
		$('.filter_input').val('');
	})
	
	//鼠标点击文本框显示清空提示框，失焦则隐藏(隐藏失败)
	$('.filter_input').click(function(){
		var check1 = $(this).val();
		if (check1 == this.defaultValue) {
			$('.filter_item_pop').css('display','block')
		}
	})

	$('.filter_item_pop').blur(function(){
		if ($('.filter_item_pop').css('display') == 'block') {
			$('.filter_item_pop').css('display','none')
		} else{
			$('.filter_item_pop').css('display','none')
		}
		
	})
	
//	$('body').click(function(e){
//		if (!$('e.target').is('.filter_pop_active')) {
//			if ($('filter_item_pop').is(':visible')){
//				$('filter_item_pop').css('display','none')
//			}else{
//				$('filter_item_pop').css('display','none')
//			}
//		}
//	})
	
	
	
	
	//动态创建商品列表
	var goodsList_inf = [
		{
			path:'img/goodsList/goodsList_gl001.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl002.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl003.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl004.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl005.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl006.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl007.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl008.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl009.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl010.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl011.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl012.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl009.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl008.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl007.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl006.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl005.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl004.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl003.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		},
		{
			path:'img/goodsList/goodsList_gl002.jpg',
			name:'【年货节】华硕灵耀X系列轻薄本（Windows 10 home/i7-8550U/16GB... ', 
			price:'￥5799'
		}
	]
//	console.log(goodsList_inf.length)
	for (var i=0;i<goodsList_inf.length;i++) {
		var goodsList_str = `
								<li class="goods_item">
									<div class="goods_pic">
										<a href="goodsDetails.html">
											<img class="goods_img" src="${goodsList_inf[i].path}" />
										</a>
									</div>
									<div class="goods_info">
										<h3 class="goods_name">
											<a href="goodsDetails.html">${goodsList_inf[i].name}</a>
										</h3>
										<div class="goods_price">
											<span>${goodsList_inf[i].price}</span>
										</div>
									</div>
									<div class="goods_buy">
										<a href="goodsDetails.html">
											<span>加入购物车</span>
										</a>
									</div>
									<div class="goods_love">
										<a href="">
											<i class="icon_pic">收藏</i>
										</a>
									</div>
								</li>
		`;
		$('.goods_list').append( goodsList_str );
	}
	
	
	//回到顶部
	$(document.body).on('click','#backTop',function(){
		$('html,body').animate({scrollTop:0},"fast");
	})
	
}
