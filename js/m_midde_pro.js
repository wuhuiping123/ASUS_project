$(function() {
	console.log(12342545)
	console.log($('.tab_head_item').length)
	console.log($('.tab_body_item').length)

	for(var i = 0; i < $('.tab_head_item').length; i++) {
		$('.tab_head_item').mouseover(function(){
			var j = $(this).index();
			$('.tab_head_item').eq(j).addClass('on').siblings().removeClass('on')
			$('.tab_body_item').eq(j).addClass('curr').siblings().removeClass('curr')
		})
	}
})




05 