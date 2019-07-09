window.onload = function() {
	
	//不同登录方式切换
	$('#login_code').click(function(){
		$('#loginCode').css('display','block')
		$('#loginAccount').css('display','none')
		$('#login_code').css('color','#0aa8ff')
		$('#login_account').css('color','#8a8a8a')
	})
	
	$('#login_account').click(function(){
		$('#loginAccount').css('display','block')
		$('#loginCode').css('display','none')
		$('#login_account').css('color','#0aa8ff')
		$('#login_code').css('color','#8a8a8a')
	})
	
	
	//表单验证
	$('.in').blur(function(){
//		alert(1)
		var index = $('.in').index(this);
		var value = $('.in').val();
		var login;
		switch(index){
			case 0:
				login = /^1\d{10}$/;
				break;
			case 1:
				login = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{4}$/;
				break;
			case 2:
				login = /^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/;
				break;
			case 3:
				login = /^[a-zA-Z]\w{5,17}$/;
				break;
		}
		checked(login,value,index);
	})
	
	function checked(login,value,index){
		var result = login.test(value);
//		console.log(value,result,login);
		if (result == false) {
			$('p').eq(index).css('display','block');
		} else{
			$('p').eq(index).css('display','none');
		}
		
	}
	
}
