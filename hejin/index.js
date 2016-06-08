// function change1(){
// 	var row1=document.getElementById("row1");
//     row1.onclick=fuction(){
//     		document.getElementById("one2").innerHTML="全部订单";
//     	}
// }
// function change2(){
// 	var row2=document.getElementById("row2");
//     row2.onclick=fuction(){
//     		document.getElementById("one2").innerHTML="订单成功";
//     	}
// }
// function change3(){
// 	var row3=document.getElementById("row3");
//     row3.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="订单关闭";
//     	}
// }
// function change4(){
// 	var row4=document.getElementById("row4");
//     row4.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="待支付";
//     	}
// }
// function change5(){
// 	var row5=document.getElementById("row5");
//     row5.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="退款处理中";
//     	}
// }
// function change6(){
// 	var row6=document.getElementById("row6");
//     row6.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="已退单";
//     	}
// }
// function change7(){
// 	var row7=document.getElementById("row7");
//     row7.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="订单处理中";
//     	}
// }
// function change8(){
// 	var row8=document.getElementById("row8");
//     row8.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="待购票";
//     	}
// }

$(document).ready(function(){ 

  $("#row1").click(function(){ 
  //$("#one2").text("全部订单"); 
  if($("#one2").length>0)
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">全部订单<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">全部订单<i class="fa fa-angle-down"></i></div>');
  $('#i3').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i1').show(); 
  });
  

  $("#row2").click(function(){  	
  //$("#one2").text("订单成功");  
  //$("#one2").append("<i class="fa fa-angle-down"></i>");
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">订单成功<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">订单成功<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i3').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i3').show();
  });  

  $("#row3").click(function(){  	
  //$("#one2").text("订单关闭");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">订单关闭<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">订单关闭<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i3').show(); 
  });  


  $("#row4").click(function(){  	
  //$("#one2").text("待支付");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">待支付<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">待支付<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i3').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i4').show(); 
  });  


  $("#row5").click(function(){  	
  //$("#one2").text("退款处理中");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">退款处理中<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">退款处理中<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i3').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i5').show();  
  });  

  
  $("#row6").click(function(){  	
  //$("#one2").text("已退单");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">已退单<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">已退单<i class="fa fa-angle-down"></i></div>');

  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i3').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i6').show(); 
  });  


  $("#row7").click(function(){  	
  //$("#one2").text("订单处理中"); 
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0)  
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">订单处理中<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">订单处理中<i class="fa fa-angle-down"></i></div>');

  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i3').hide();$('#i8').hide();  
  $('#i7').show(); 
  });  
 
  $("#row8").click(function(){  	
  //$("#one2").text("待购票");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">待购票<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">待购票<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i3').hide();  
  $('#i8').show();  
  });  


  



});

