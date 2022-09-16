$(document).ready(function(){
    $("li").mouseup(function(e){
      e.preventDefault()
      if($(this).attr('name')=='user'){
        console.log($('form').attr('action'));
        $(this).addClass('active');
    $(this).siblings().removeClass('active');
        if($('form').attr('action')=='/business-sign-in'){
          $('form').attr('action','/user-sign-in');
          $('form a').attr('href','/user-sign-up');
        }
        
      }else{
        $(this).addClass('active');
    $(this).siblings().removeClass('active');
        if($('form').attr('action')=='/user-sign-in'){
          $('form').attr('action','/business-sign-in');
          $('form a').attr('href','/business-sign-up');
        }        
      }
    })});
    
   