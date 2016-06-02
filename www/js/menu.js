var scrollTop;

$(document).ready(function(){

	$('#menu').css('top',document.documentElement.clientHeight-60);	
	//###########menu#hover###############################  
	$('#naw_top li').hover(
	function(){
		if ($(this).attr("class") =='a_null'){
			$(this).css('box-shadow','inset 0 -8px #C0C0C0');
		}
		$(this).children('ul').stop(false,true).slideDown(200);},
	function(){
			$(this).children('ul').stop(false,true).fadeOut(200);
			$(this).css('box-shadow','inset 0 0 #C0C0C0');
	});
	//##########################################  
	var top = $('#menu').offset().top;
	var flag = false;
	var flag1 = false;

	$(window).scroll(function(){
	scrollTop = $(window).scrollTop();
	flag = (top < scrollTop);
	if (flag != flag1){
		if( flag ){	
		$('#menu').stop(false,true).css({position:'fixed', top:'-5px'}).animate({width: '100%',marginLeft:'0%' },{ queue:false},560);
		$('#naw_top').animate({width:'80%',marginLeft:'10%'},{ queue:false},560);
		$('#naw_top  ul').animate({width:'20%'},{ queue:false},560);
		flag1 = flag;			
	}
	else{
		$('#menu').stop(false,true).css({position:'absolute',top:document.documentElement.clientHeight-60}).animate({width: '80%',marginLeft:'10%'},{ queue:false},160);
		$('#naw_top').animate({width:'100%',marginLeft:'0%'},{ queue:false},560);
		$('#naw_top  ul').animate({width:'25%'},{ queue:false},560);
		flag1 = flag;
		 };
};
});
//###############resize#######################  
	$(window).resize(function(){
	$('#menu').css('top',document.documentElement.clientHeight-60);	
	scrollTop = $(window).scrollTop();
	});
});