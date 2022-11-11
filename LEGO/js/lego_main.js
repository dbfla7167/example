
  $(function(){


    //최신소식 북마크 클릭 색변환

    $("#news i").click(function(){
      $(this).toggleClass("on");
    });


    //스토어 버튼 눌러서 위 아래로 슬라이드

    $("#store .arrow > .up").click(function(){
      var last = $("#store .slider li:last");
      $("#store .slider > ul").prepend(last).css("top","-150px").stop().animate({"top":0},600)
      
    });
    $("#store .arrow > .dw").click(function(){
      var first = $("#store .slider li:first");
      $("#store .slider > ul").stop().animate({"top":"-150px"},600,
      function(){
        $(this).append(first).css("top","0px");
      })
    });


    //스토어 마우스오버시 스토어 사진 나오기

    $("#store .slider .li1").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b1").css("opacity",1);
    });
    

    $("#store .slider .li2").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b2").css("opacity",1);
    });
   
    $("#store .slider .li3").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b3").css("opacity",1);
    });
    

    $("#store .slider .li4").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b4").css("opacity",1);
    });
    

    $("#store .slider .li5").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b5").css("opacity",1);
    });
  

    $("#store .slider .li6").mouseover(function(){
      $("#store .img .banner").css("opacity",0);
      $("#store .img .b6").css("opacity",1);
    });

    //페이지 시작시 첫번째 항목이 보이게
    $("#store .slider li:first").trigger("mouseover")
    


    //버튼 눌러 광고 배너 이동

    $("#ad #dot > li").click(function(){
        var i = $(this).index();
        var pos = i*-520;
        $("#viewer").stop().animate({"top":pos+"px"},500);
      });
    
    });
