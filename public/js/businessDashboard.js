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

    $("table button").click(function(){
    
      var buttonVal = $(this).val();
      console.log(buttonVal);
      fetch("/businessDashboard/queueDelete", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify({
          q_Id : buttonVal,
        })
      })
        .then((res) => window.location = '/businessDashboard');
    })

    //  $("tbody tr").click(function() {
    //     window.location = '/businessDashboard/Openqueue';
    //   });


    // $("tbody tr").click(function() {
    //   console.log("called the js");
    //   $("#rowForm").submit();
    //   // window.location = '/userDashboard/findwindow';
    // });


});
