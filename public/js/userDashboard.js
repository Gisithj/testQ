

$(document).ready(function () {
  $(".nav-item").mouseup(function (e) {
    e.preventDefault();
    console.log($);
    if ($(this).siblings().hasClass("active-nav-item")) {
      $(this).siblings().removeClass("active-nav-item");
      $(this).addClass("active-nav-item");
    } else {
      $(this).addClass("active-nav-item");
    }
  });

  // $("tbody tr").click(function () {
  //   console.log("called the js");
  //   $("#rowForm").submit();
  // });




  $("#Qtype").click(function () {
    if ($(this).is(":checked")) {
      $("maxToken").prop("disabled", true);
    } else {
      $("#dropdown").prop("disabled", false);
    }
  });


  $("table button").click(function(){
    
    var buttonVal = $(this).val();
    console.log(buttonVal);
    fetch("/userDashboard/tokenDelete", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        q_Id : buttonVal,
      })
    })
      .then((res) => window.location = '/userDashboard');
  })


  //handle the click on to a row in find queues
  $(".findQueues tr").click(function(){
    
    var buttonVal = $(this).find(".q_Id:first").text();
    // var buttonVal = 1;
    console.log(buttonVal);
    fetch("/userDashboard/findQueues/findWindow", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        q_Id : buttonVal,
      })
    }).then(res => res.text()).then(htmlStr => {
      document.open();
      document.write(htmlStr);
      document.close();
    })
  })

  //handle the admit button on after opening a queue
  $(".adt").click(function(){
    var buttonVal = $("#q_Id").text();
    // var buttonVal = 1;
    console.log("called");
    console.log(buttonVal);
    fetch("/userDashboard/findQueues/findWindow/add", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        q_Id : buttonVal,
      })
    }).then(res => res.text()).then(htmlStr => {
      document.open();
      document.write(htmlStr);
      document.close();
    })
  })



});
