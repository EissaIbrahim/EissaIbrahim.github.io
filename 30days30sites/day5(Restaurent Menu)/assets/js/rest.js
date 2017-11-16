






$("#1").click(function(){
   $("#input1").val("4");
})


$("#2").click(function(){
   $("#input2").val("6");
})

$("#3").click(function(){
   $("#input3").val("3")
})

$("#4").click(function(){
   $("#input4").val("1")
})

$("#5").click(function(){
    $("#input5").val("2")
})

$("#6").click(function(){
    $("#input6").val("1")
})

$("#reset").click(function(){
  $("#inputfield").val("0")
  $("#input1").val(" ");
  $("#input2").val(" ");
  $("#input3").val(" ");
  $("#input4").val(" ");
  $("#input5").val(" ");
  $("#input6").val(" ");
  
  
  
})







$("#total").click(function(){
  var input1 = $("#input1").val()
  var input2 = $("#input2").val()
  var input3 = $("#input3").val()
  var input4 = $("#input4").val()
  var input5 = $("#input5").val()
  var input6 = $("#input6").val()
  
  var total = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5) + parseInt(input6)
  $("#inputfield").val(total);
})
