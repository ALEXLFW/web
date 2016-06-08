$(document).ready(function(){
	$(".img2").hide();
	$(".box2").hide();
	$(".img2").hide();
	$(".col-xs-b2").click(function(){
	    $(".box2").show();
	    $(".box1").hide();

	});
	$(".col-xs-b1").click(function(){
	    $(".box1").show();
	    $(".box2").hide();

	});

	$(".b2").click(function(){
		$(".img2").show();
		$(".img1").hide();
		$(".b2").css("background-color","grey");
		$(".b1").css("background-color","orange");

	});
	$(".b1").click(function(){
		$(".img1").show();
		$(".img2").hide();
		$(".b1").css("background-color","grey");
		$(".b2").css("background-color","orange");
	});


});