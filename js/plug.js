$(document).ready(function(){
 
//from envents 
 
$(".from").animate({top: '530px'},500);

$(".put").on("focus",function(){
$(".icon").css("transition","0.1s");    
$(".icon").animate({width: '30px'});
});
   
$(".put").on("blur",function(){
$(".icon").css("transition","0.1s");    
$(".icon").animate({width: '0px'});
});
    
$(".put2").on("focus",function(){
$(".icon2").css("transition","0.1s");  
$(".icon2").animate({width: '30px'});
});

$(".put2").on("blur",function(){
$(".icon2").css("transition","0.1s");  
$(".icon2").animate({width: '0px'});
 });

    $(".btn").on("click",function(){
     $(this).fadeOut(function(){$(".kk").show()});
        
       
    });
   
     $(".kk").on("click",function(){
      $(".from").animate({top: '-400px'},1000);
    
    });
});