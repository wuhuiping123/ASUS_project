window.onload = function(){
	//动态创建
	var ocnHots_inf = [
		{
			path:'img/oldChangeNew/oldChangeNew_ocn013.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn014.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn015.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn016.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn017.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn018.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn019.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn020.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn021.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		},
		{
			path:'img/oldChangeNew/oldChangeNew_ocn022.jpg',
			name:'华硕N56 ', 
			counts:'3597人回收'
		}
	]
//	console.log(ocnHots_inf.length)
	for (var i=0;i<ocnHots_inf.length;i++){
		var ocnHots_str = `
						<li class="hots_item">
							<div class="itemPic">
								<img src="${ocnHots_inf[i].path}" />
							</div>
							<div class="text4">${ocnHots_inf[i].name}</div>
							<div class="counts">${ocnHots_inf[i].counts}</div>
						</li>
		`;
		$('.hots_recyc').append( ocnHots_str );
	}
	
	
}
