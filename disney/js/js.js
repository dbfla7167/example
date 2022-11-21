$(function(){

  //실시간 순위 클릭시 작품 정보 나오게 하기

  $("#rank .content li").click(function(){
    var i = $(this).index();
    $("#info").css("display","block");
    $("#info .box").eq(i).css("display","block");
  });

  //작품 상세정보 x버튼 클릭시 나오게

  $("#info .toggle").click(function(){
    $("#info").css("display","none");
    $("#info .box").css("display","none");
  });

  //광고배너 자동 슬라이드
  setInterval(function(){
    var first = $("#banner .ad > li:first");
    $("#banner .ad").stop().animate({"left":"-1180px"},2000,
    function(){
      $(this).append(first).css("left","0")})
    },3000);
  
})