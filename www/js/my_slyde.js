var a = $('#slyde img');
var i = 0;


$('#slyde_img').click(function(eventObject){

eventObject.preventDefault();

if (i==a.size()-1){i = 0;}
else { i++;}   

$('#page_f').attr('src', a.eq(i).attr('src'));



});
//    
////===================================================
////===================================================
//
//$('#strelka_left').click(function(eventObject){
//
//eventObject.preventDefault();
//   if(i==0){i =a.size()-1 } else {i--}
//    
//$('#s_s').attr('src', a.eq(i).attr('src'));
//});
//  
