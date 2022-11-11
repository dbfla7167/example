
  $(function(){
   

    //제품 서브 페이지

    //신제품 버튼 기능
    $("#new_p .arrow > .next").click(function(){
      var first = $("#new_p .contents > div:first");
      $(".contents").append(first);
    });

    $("#new_p .arrow > .prev").click(function(){
      var last = $("#new_p .contents > div:last");
      $(".contents").prepend(last);
    });

    
    //제품 북마크 클릭
    $("#product i").click(function(){
      $(this).toggleClass("on");
    });
    
    
    });
