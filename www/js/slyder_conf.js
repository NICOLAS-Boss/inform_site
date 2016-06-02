$(document).ready(function(){
	//################slyder#####################  
	$('#banner-fade').bjqs({
		animtype      : 'slide',
		responsive    : true,
		nexttext : '<img src="right-arrow.png">', 
		prevtext : '<img src="left-arrow.png">', 
		height        : document.documentElement.clientHeight,
		width         : document.documentElement.clientWidth-17,
		showmarkers : false	
	});
});