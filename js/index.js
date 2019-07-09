window.onload = function() {

	//轮播效果
	var lunboBox = document.getElementById('lunbo_box');
	var lunbo = lunboBox.children[0];
	var imgWidth = lunbo.offsetWidth;
	var ulObj = lunbo.children[0];
	var list = ulObj.children;
	var olObj = lunbo.children[1];
	var arr = document.getElementById('arr');
	var arrLeft = document.getElementById('arrLeft');
	var arrRight = document.getElementById('arrRight');
	var pic = 0;

	//根据li个数创建圆点小按钮
	for(var i = 0; i < list.length; i++) {
		var liObj = document.createElement("li");
		olObj.appendChild(liObj);
//		liObj.innerText=(i+1);
		liObj.setAttribute("index", i);
//		console.log(i);
		//为圆点小按钮注册mouseover事件
		liObj.onmouseover = function() {
			for(var j = 0; j < olObj.children.length; j++) {
				olObj.children[j].removeAttribute("class");
			}
			this.className = "current";
			pic = this.getAttribute("index");
			animate(ulObj, -pic * imgWidth);
		}
	}

	//设置ol中第一个圆点有背景颜色
	olObj.children[0].className = "current";
	//克隆ul中第一个li中的图片加入到ul的最后
	ulObj.appendChild(ulObj.children[0].cloneNode(true));

	//左右焦点实现点击切换图片功能
	var timeId = setInterval(onmouseclickHandle, 3000);
	lunboBox.onmouseover = function() {
		arr.style.display = "block";
		clearInterval(timeId);
	}
	lunboBox.onmouseout = function() {
		arr.style.display = "none";
		timeId = setInterval(onmouseclickHandle, 3000);
	}

	arrRight.onclick = onmouseclickHandle;

	function onmouseclickHandle() {
		if(pic == list.length - 1) {
			pic = 0; //先设置pic=0
			ulObj.style.left = 0 + "px";
		}
		pic++;
		animate(ulObj, -pic * imgWidth);

		if(pic == list.length - 1) {
			olObj.children[olObj.children.length - 1].className = "";
			olObj.children[0].className = "current";
		} else {
			for(var i = 0; i < olObj.children.length; i++) {
				olObj.children[i].removeAttribute("class");
			}
			olObj.children[pic].className = "current";
		}
	}

	arrLeft.onclick = function() {
		if(pic == 0) {
			pic = list.length - 1;
			ulObj.style.left = -pic * imgWidth + "px";
		}
		pic--;
		animate(ulObj, -pic * imgWidth);

		for(var i = 0; i < olObj.children.length; i++) {
			olObj.children[i].removeAttribute("class");
		}
		olObj.children[pic].className = "current";
	}

	function animate(element, target) {
		clearInterval(element.timeId);
		element.timeId = setInterval(function() {
			var current = element.offsetLeft;
			var step = 50;
			step = current < target ? step : -step;
//					var step = 0;
//					if (current<target) {
//		            	step = 10;
//		            } else {
//		            	step = -10;
//		            }
			current += step;
			if(Math.abs(current - target) > Math.abs(step)) {
				element.style.left = current + "px";
			} else {
				clearInterval(element.timeId);
				element.style.left = target + "px";
			}
		}, 10);
	}
	
	//动态创建二级菜单
	for(var i = 0; i < $('.category_item').length; i++) {
		var str_sub_category_item = `
									<div class="sub_category_box">
									<ul>
										<li class="sub_category_item">
											<div class="sub_category_item_left l">
												<a href="goodsList.html" target="_blank">
													<span>
														<img src="img/indexPic/index_subMenu001.jpg" />
													</span>
													<span>灵耀轻薄本</span>
												</a>
											</div>
											<div class="sub_category_item_right">
												<a href="goodsList.html" target="_blank">灵耀3系列</a>
												<a href="goodsList.html" target="_blank">灵耀U系列</a>
												<a href="goodsList.html" target="_blank">灵耀S系列</a>
											</div>
										</li>
										<li class="sub_category_item">
											<div class="sub_category_item_left l">
												<a href="goodsList.html" target="_blank">
													<span>
														<img src="img/indexPic/index_subMenu002.jpg" />
													</span>
													<span>灵耀轻薄本</span>
												</a>
											</div>
											<div class="sub_category_item_right">
												<a href="goodsList.html" target="_blank">灵耀3系列</a>
												<a href="goodsList.html" target="_blank">灵耀U系列</a>
												<a href="goodsList.html" target="_blank">灵耀S系列</a>
											</div>
										</li>
										<li class="sub_category_item">
											<div class="sub_category_item_left l">
												<a href="goodsList.html" target="_blank">
													<span>
														<img src="img/indexPic/index_subMenu001.jpg" />
													</span>
													<span>游戏笔记本</span>
												</a>
											</div>
											<div class="sub_category_item_right">
												<a href="goodsList.html" target="_blank">顽石系列</a>
												<a href="goodsList.html" target="_blank">飞行堡垒5/6系列</a>
											</div>
										</li>
										<li class="sub_category_item">
											<div class="sub_category_item_left l">
												<a href="goodsList.html" target="_blank">
													<span>
														<img src="img/indexPic/index_subMenu002.jpg" />
													</span>
													<span>办公娱乐本</span>
												</a>
											</div>
											<div class="sub_category_item_right">
												<a href="goodsList.html" target="_blank">效能先锋系列</a>
												<a href="goodsList.html" target="_blank">学生助手系列</a>
												<a href="goodsList.html" target="_blank">大屏影音系列</a>
											</div>
										</li>
										<li class="sub_category_item">
											<div class="sub_category_item_left l">
												<a href="goodsList.html" target="_blank">
													<span>
														<img src="img/indexPic/index_subMenu001.jpg" />
													</span>
													<span>商用笔记本本</span>
												</a>
											</div>
											<div class="sub_category_item_right">
												<a href="goodsList.html" target="_blank">灵耀3系列</a>
												<a href="goodsList.html" target="_blank">灵耀U系列</a>
												<a href="goodsList.html" target="_blank">灵耀S系列</a>
											</div>
										</li>
									</ul>
								</div>
								
								<div class="sub_category_ad">
									<a href="goodsList.html" target="_blank">
										<img src="img/indexPic/index_subMenu003.jpg" />
									</a>
								</div>
		`;
		$('.sub_box').append( str_sub_category_item )
	}
	
	
	//动态创建hot_sale
	var hotSale_inf = [
		{
			path:'img/indexPic/index_hotSale001.jpg"',
			name:'灵耀S 2代',
			feature:'三面窄边框 / 炫彩轻薄',
			price:'￥5999'
		},
		{
			path:'img/indexPic/index_hotSale002.png',
			name:'【热销】13.3英寸四面窄边框笔记本',
			feature:'四面窄 / 全面屏 / Intel® 第八代 Core™ 处理器',
			price:'￥3699'
		},
		{
			path:'img/indexPic/index_hotSale003.jpg',
			name:'灵耀U 2代',
			feature:'IPS全镜面屏 / 人脸识别',
			price:'￥6799'
		},
		{
			path:'img/indexPic/index_hotSale004.jpg',
			name:'飞行堡垒6',
			feature:'6.5mm窄边框 / 战甲X型设计',
			price:'￥6499'
		},
		{
			path:'img/indexPic/index_hotSale005.jpg',
			name:'【新品】灵耀U 2代 13.3英寸全面屏轻薄本',
			feature:'13.3英寸轻巧便携升级 / 全固态硬盘',
			price:'￥6799'
		}
	]
	
	for(var i=0;i<hotSale_inf.length;i++){
//		console.log( hotSale_inf[i] );
		var str = `
			<li class="hotSale_item">
						<div class="hotSale_pic">
							<a href="#">
								
								<img src="${hotSale_inf[i].path}" />
							</a>
						</div>
						<div class="hotSale_name">
							<a href="#">
								<p>${hotSale_inf[i].name}</p>
								<p>${hotSale_inf[i].feature}</p>
							</a>
						</div>
						<div class="hotSale_price">${hotSale_inf[i].price}</div>
					</li>
		`;
		$('.hotSale_list').append( str );
		console.log( i )
	}
	
	//回到顶部
	$('#backTop').click(function(){
		$('html,body').animate({scrollTop:0},"fast");
	})
	
	
	//产品分类块
//	$('#module_slide_272').each(function(item){
//		new Switch
//	})
	
	
}