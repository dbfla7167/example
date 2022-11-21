$(function(){



  //최신작품 클릭시 정보 뜨게하기
  $("#recent .content li").click(function(){
    var i = $(this).index();
    $("#recent .info").css("display","none");
    $("#recent .info").eq(i).css("display","flex");
  });
  //처음 항목 뜨게하기
  $("#recent .content li:first").trigger("click");

  //예정작품 버튼 클릭하면 해당하는 페이지가 뜨게
  $("#year .button > button").click(function(){
    var n = $(this).index();
    $("#year .content > ul").css({"opacity":"0","z-index":"0"});
    $("#year .content > ul").eq(n).css({"opacity":"1","z-index":"1"})
    $("#year .button > button").css({"background-color":"#fff","color":"#555ce9"})
    $(this).css({"background-color":"#555ce9","color":"#fff"})
  });
  //이번달 항목 뜨게하기
  $("#year .button > button:first").trigger("click");
})