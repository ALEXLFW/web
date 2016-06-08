$(document).ready(function() {  
    var i = -1;  
    // 添加年份，从1910年开始  
    for (i = 1910; i <= new Date().getFullYear(); i++) {  
        addOption(birth_year, i, i - 1909);   
    }  
    // 添加月份  
    for (i = 1; i <= 12; i++) {  
         addOption(birth_month, i, i);  
    }  
    // 添加天份，先默认31天  
    for (i = 1; i <= 31; i++) {  
        addOption(birth_day, i, i);  
    }
    $(".img2").hide();
    $(".box2").hide();
    $(".img2").hide();
    $(".col-xs-b4").click(function(){
        $(".box2").show();
        $(".box1").hide();
        $(".col-xs-b4").css("border-bottom","1px solid orange");
        $(".style-2").css("color","orange");
        $(".fa-map-marker").css("color","orange");
        $(".col-xs-b3").css("border-bottom","1px solid white");
        $(".style-1").css("color","black");
        $(".fa-bus").css("color","black");


    });
    $(".col-xs-b3").click(function(){
        $(".box1").show();
        $(".box2").hide();
        $(".col-xs-b3").css("border-bottom","1px solid orange");
        $(".style-1").css("color","orange");
        $(".fa-bus").css("color","orange");
        $(".col-xs-b4").css("border-bottom","1px solid white");
        $(".style-2").css("color","black");
        $(".fa-map-marker").css("color","black");
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
  
       
// 设置每个月份的天数  
function setDays(year, month,day) {  
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
    var yea = year.options[year.selectedIndex].text;  
    var mon = month.options[month.selectedIndex].text;  
    var num = monthDays[mon - 1];  
    if (mon == 2 && isLeapYear(yea)) {  
        num++;  
    }  
    for (var j = day.options.length - 1; j >=num; j--) {  
           day.remove(j);  
       }  
       for (var i = day.options.length; i <= num; i++) {  
           addOption(birth_day,i,i);  
       }  
}  
       
// 判断是否闰年  
function isLeapYear(year)  
{  
    return (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0));  
}  
       
// 向select尾部添加option  
function addOption(selectbox, text, value) {  
    var option = document.createElement("option");  
    option.text = text;  
    option.value = value;  
    selectbox.options.add(option);  
}  

