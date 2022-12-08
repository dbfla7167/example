$(function(){
  //자동 슬라이드
  setInterval(function(){
    var first = $("#banner .slide > li:first");
    $("#banner .slide").stop().animate({"left":"-291px"},1400,
    function(){
      $(this).append(first).css("left","0px")})
    },2000);
    //버튼 누르면 스크롤 나오기
    $("#page nav .page1").click(function(){
      $("#page nav button").css("background-color","#fff");
      $(this).css("background-color","#5897ff");
      $("#page .scroll li").css({"opacity":"0","display":"none"});
      $("#page .scroll .p1").css({"opacity":"1","display":"block"});
    });
    $("#page nav .page2").click(function(){
      $("#page nav button").css("background-color","#fff");
      $(this).css("background-color","#ff84a7");
      $("#page .scroll li").css({"opacity":"0","display":"none"});
      $("#page .scroll .p2").css({"opacity":"1","display":"block"})
    });
    $("#page nav .page3").click(function(){
      $("#page nav button").css("background-color","#fff");
      $(this).css("background-color","#5897ff");
      $("#page .scroll li").css({"opacity":"0","display":"none"});
      $("#page .scroll .p3").css({"opacity":"1","display":"block"})
    });
    $("#page nav .page1").trigger("click");
})