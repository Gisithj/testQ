$(document).ready(function(){

    $(".nav-item").mouseup(function(e){
      e.preventDefault()
      console.log($);
      if($(this).siblings().hasClass('active-nav-item')){
        $(this).siblings().removeClass('active-nav-item');
        $(this).addClass('active-nav-item');
      }else{
        $(this).addClass('active-nav-item');
      }
    })

    $("tbody tr").click(function() {
        window.location = '/';
      });

      $("#Qtype").click(function() {
        if ($(this).is(":checked")) {
           $("maxToken").prop("disabled", true);
        } else {
           $("#dropdown").prop("disabled", false);  
        }
      });


});
