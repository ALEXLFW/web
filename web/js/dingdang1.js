// function change1(){
// 	var row1=document.getElementById("row1");
//     row1.onclick=fuction(){
//     		document.getElementById("one2").innerHTML="ȫ������";
//     	}
// }
// function change2(){
// 	var row2=document.getElementById("row2");
//     row2.onclick=fuction(){
//     		document.getElementById("one2").innerHTML="�����ɹ�";
//     	}
// }
// function change3(){
// 	var row3=document.getElementById("row3");
//     row3.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="�����ر�";
//     	}
// }
// function change4(){
// 	var row4=document.getElementById("row4");
//     row4.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="��֧��";
//     	}
// }
// function change5(){
// 	var row5=document.getElementById("row5");
//     row5.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="�˿����";
//     	}
// }
// function change6(){
// 	var row6=document.getElementById("row6");
//     row6.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="���˵�";
//     	}
// }
// function change7(){
// 	var row7=document.getElementById("row7");
//     row7.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="����������";
//     	}
// }
// function change8(){
// 	var row8=document.getElementById("row8");
//     row8.onclick=fuction(){
//     	  document.getElementById("one2").innerHTML="����Ʊ";
//     	}
// }

$(document).ready(function(){ 

  $("#row1").click(function(){ 
  //$("#one2").text("ȫ������"); 
  if($("#one2").length>0)
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">ȫ������<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">ȫ������<i class="fa fa-angle-down"></i></div>');
  $('#i3').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i1').show(); 
  });
  

  $("#row2").click(function(){  	
  //$("#one2").text("�����ɹ�");  
  //$("#one2").append("<i class="fa fa-angle-down"></i>");
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">�����ɹ�<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">�����ɹ�<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i3').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i3').show();
  });  

  $("#row3").click(function(){  	
  //$("#one2").text("�����ر�");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">�����ر�<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">�����ر�<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i3').show(); 
  });  


  $("#row4").click(function(){  	
  //$("#one2").text("��֧��");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">��֧��<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">��֧��<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i3').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i4').show(); 
  });  


  $("#row5").click(function(){  	
  //$("#one2").text("�˿����");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
     $("#one2").replaceWith('<div class="col-xs-8" id="one22">�˿����<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">�˿����<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i3').hide(); $('#i6').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i5').show();  
  });  

  
  $("#row6").click(function(){  	
  //$("#one2").text("���˵�");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">���˵�<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">���˵�<i class="fa fa-angle-down"></i></div>');

  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i3').hide(); $('#i7').hide();$('#i8').hide();  
  $('#i6').show(); 
  });  


  $("#row7").click(function(){  	
  //$("#one2").text("����������"); 
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0)  
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">����������<i class="fa fa-angle-down"></i></div>');
  else
    $("#one22").replaceWith('<div class="col-xs-8" id="one2">����������<i class="fa fa-angle-down"></i></div>');

  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i3').hide();$('#i8').hide();  
  $('#i7').show(); 
  });  
 
  $("#row8").click(function(){  	
  //$("#one2").text("����Ʊ");  
  // $("#one2").append("<i class="fa fa-angle-down"></i>"); 
  if($("#one2").length>0) 
    $("#one2").replaceWith('<div class="col-xs-8" id="one22">����Ʊ<i class="fa fa-angle-down"></i></div>');
  else
     $("#one22").replaceWith('<div class="col-xs-8" id="one2">����Ʊ<i class="fa fa-angle-down"></i></div>');
  $('#i1').hide();$('#i2').hide(); $('#i4').hide(); $('#i5').hide(); $('#i6').hide(); $('#i7').hide();$('#i3').hide();  
  $('#i8').show();  
  });  


  



});

