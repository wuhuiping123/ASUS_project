window.onload = function() {
	//注册表单验证
	$('input').blur(function(){
//		alert(1)
		var index = $('input').index(this);
		var value = $('input').val();
		var register;
		switch(index){
			case 0:
				register = /^1\d{10}$/;
				break;
			case 1:
				register = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{4}$/;
				break;
		}
		checked(register,value,index);
		
	})
	function checked(register,value,index){
		var result = register.test(value);
//		console.log(value,result,register);
		if (result == false) {
			$('p').eq(index).css('display','block');
		} else{
			$('p').eq(index).css('display','none');
		}
		
	}
	
}
