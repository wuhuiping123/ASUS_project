window.onload = function(){
	//左右
	$('.gd_next').click(function(){
		var picMove = -100*2;
		$('.gdList').css('left',picMove)
	})
	$('.gd_prev').click(function(){
		$('.gdList').css('left',0)
	})
	
	//鼠标移上
	$('.gdBtn').mouseover(function(){
		var i = $('.gdBtn').index(this)+1;
		var path = 'img/goodsDetails/goodsDetails_gd00'+i+'.jpg';
//		console.log(i,path)
		$('#sPic').attr('src',path)
		$('#bPic').attr('src',path)
	})
	
	
	//放大镜
	$('#mask').mouseover(function(){
		$('#square').show()
		$('#m_bPic').show()
	})
	$('#mask').mouseout(function(){
		$('#square').hide()
		$('#m_bPic').hide()
	})
	$('#mask').mousemove(function(event){
		var nowleft = Math.floor(event.pageX - $('#mask').offset().left) - 125;
		var nowtop = event.pageY - $('#mask').offset().top - 125;
		console.log(nowleft,nowtop)
		if (nowleft<0) {
			nowleft = 0
		}
		if (nowleft > $(this).width() - $('#square').width()) {
			nowleft = $(this).width() - $("#square").width()
		}
		if(nowtop < 0) {
			nowtop = 0
		}
		if(nowtop > $(this).height() - $("#square").height()) {
			nowtop = $(this).height() - $("#square").height()
		}
		
		$("#square").css({
			"left": nowleft,
			"top": nowtop
		})
		$("#m_bPic img").css({
			'top': -nowtop * 2,
			'left': -nowleft * 2
		})
		
		
	})
	
	var num = $('#num').val();
	$('#sub').click(function(){
//		console.log($('#num').val())
		var num = $('#num').val();
		console.log(num)
		num--;
		if(num<=1){
			num=1
		}
		$('#num').attr('value',num)	
		console.log(num)
	})
	
	$('#add').click(function(){
//		console.log($('#num').val())
		var num = $('#num').val();
		console.log(num)
		num++;
		$('#num').attr('value',num)
		console.log(num)
	})
	
	
	//回到顶部
	$(document.body).on('click','#backTop',function(){
		$('html,body').animate({scrollTop:0},"fast");
	})
}
