$(document).ready(function(){
	$('#osnova').load('main.html');
	window.history.replaceState(' ',  document.title,'');
	//########################################## 
	 $('.a_null').click(function(eventObject){
		eventObject.preventDefault();
		});   
	//###########################################

	$('.page1').click(function(eventObject){
		$('#osnova').load('page/sportcar/page1/page1.html');
		window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		eventObject.preventDefault();
	});


	$('#main_b').click(function(eventObject){
		$('#osnova').load('main.html');
		window.history.pushState($(this).attr('href'),  document.title, $(this).attr('href'));
		eventObject.preventDefault();
	});

	$('.page2').click(function(eventObject){
		$('#osnova').load('page/sportcar/page2/page2.html');
		window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		eventObject.preventDefault();
	});


	$('.page3').click(function(eventObject){
		$('#osnova').load('page/sportcar/page3/page3.html');
		window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		eventObject.preventDefault();
	});

	$('.page4').click(function(eventObject){
		 $('#osnova').load('page/sportcar/page4/page4.html');
		 window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		 eventObject.preventDefault();
	});   	

	 $('.innova').click(function(eventObject){
		$('#osnova').load('page/news.html');
		window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		eventObject.preventDefault();

	});  

	 $('.interes').click(function(eventObject){
		$('#osnova').load('page/interest.html');
		window.history.pushState($(this).attr('href'), document.title, $(this).attr('href'));
		eventObject.preventDefault();

	}); 
	
		$('.send_mes').click(function(eventObject){
		eventObject.preventDefault();
		$('#sms').fadeIn(200);
	});
	
	$('#close_form').click(function(eventObject){
		eventObject.preventDefault();
		$('#sms').hide(20);
	});
	
	window.addEventListener('popstate', function(e) {

		$('#osnova').load(crutch[(e.state)]);
	});

});
	


   


