// document.addEventListener('blur', function (event) {
//     // Validate the field
//     const isValid = event.target.validity.valid;
//     const message = event.target.validationMessage;
//     const connectedValidationId = event.target.getAttribute('aria-describedby');
//     const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;
  
//     if (connectedValidation && message && !isValid) {
//       connectedValidation.innerText = message;
//     } else {
//       connectedValidation.innerText = '';
//     }
// }, true);

// $("input").addEventListener("blur",function(event){
//     const isvalid = event.target.validity.valid;
// })
// $( "#signup" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
//   });

// $("input[required]").keyup(function(){
//     $(this).each( function(){
//        if( $( this ).val()!="" );
//     });
// })
// $("input[required]").
// $("input[required]").keyup(function(){
//     var valid =true;
//      $("input[required]").each( function(){
//         if( $( this ).val()=="" ){
     
//         valid=false;
//         }
//      });

    //  if(!valid){
    //     $("button[name='signUp']").parent().addClass("disabledButton");
    //     $("button[name='signUp']").prop("disabled",true);
    //     console.log($("button[name='signUp']").parent().val());
    //     // $("button[name='signUp']").parent().addClass("disabledButton");

    //  }else{
    //     $("button[name='signUp']").prop("disabled",false);
        
    //     $("button[name='signUp']").parent().removeClass("disabledButton");
    //  }

//     if($('#password').val()==""){
       
//          $('#password').addClass("errorField")
//          $('label[for="password"]').addClass("errorLabel")
//         // $('#password').css("border-color","#3366ff")
//      }else{
//          $('#password').removeClass("errorField")
//          $('label[for="password"]').removeClass("errorLabel")
//      }
    
// })
// $("input[required]").keyup(function () {
   
//   });