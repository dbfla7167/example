$(function(){
    

    //네비 눌렀을때 이동
    


    $("#skill .content li .t1").mouseover(function(){
        $("#skill .content li .i1").css("display","block");
        $("#skill .content li .i1 .up").animate({"width":"100%"},550);
        $("#skill .content li .i1 .right").animate({"height":"100%"},550);
        $("#skill .content li .i1 .dw").animate({"width":"100%"},550);
        $("#skill .content li .i1 .left").animate({"height":"100%"},550);
        $(this).css("margin-bottom","20px");
    });
    $("#skill .content li .t2").mouseover(function(){
        $("#skill .content li .i2").css("display","block");
        $("#skill .content li .i2 .up").animate({"width":"100%"},550);
        $("#skill .content li .i2 .right").animate({"height":"100%"},550);
        $("#skill .content li .i2 .dw").animate({"width":"100%"},550);
        $("#skill .content li .i2 .left").animate({"height":"100%"},550);
        $(this).css("margin-bottom","20px");
    });
    $("#skill .content li .t3").mouseover(function(){
        $("#skill .content li .i3").css("display","block");
        $("#skill .content li .i3 .up").animate({"width":"100%"},550);
        $("#skill .content li .i3 .right").animate({"height":"100%"},550);
        $("#skill .content li .i3 .dw").animate({"width":"100%"},550);
        $("#skill .content li .i3 .left").animate({"height":"100%"},550);
        $(this).css("margin-bottom","20px");
    });

    //스크롤 내리면 게이지 채워지게
    $(window).scroll(function(){
        if($(window).scrollTop() > 1240){
            $("#skill .in1,.in2").stop().animate({"width":"76%","opacity":"1"},1000);
        }else if($(window).scrollTop() < 1240){
            $("#skill .in1,.in2").stop().animate({"width":"0%","opacity":"0"},300);
        }
        if($(window).scrollTop() > 1240){
            $("#skill .in3").stop().animate({"width":"67%","opacity":"1"},1000);
        }else if($(window).scrollTop() < 1240){
            $("#skill .in3").stop().animate({"width":"0%","opacity":"0"},300);
        }
    });


})

