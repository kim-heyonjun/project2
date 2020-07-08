$(function() {
  $(".bxslider").bxSlider({
    captions: false,
    //slideWidth:600,  //수정
    auto: true,
    autoControls: true,
    stopAutoOnclick: true,
  });
  $(".tabSet").each(function() {
    var anchors = $(this).find(".tabs a");
    var panelDivs = $(this).find(".panel");
    var lastAnchor;
    var lastPanel;

    anchors.show(); //
    lastAnchor = anchors.filter(".on");
    lastPanel = $(lastAnchor.attr("span_href"));

    panelDivs.hide();
    lastPanel.show();

    anchors.click(function() {
      var currentAnchor = $(this);
      var currentPanel = $(currentAnchor.attr("span_href"));

      currentAnchor.addClass("on");
      lastAnchor.removeClass("on");

      lastAnchor = currentAnchor;

      currentPanel.show();
      lastPanel.hide();

      lastPanel = currentPanel;
    });
  });

  $(".submenu").click(function() {
    $("#pop_nav").fadeIn();
  });

  $("#pop_nav .close").click(function() {
    $("#pop_nav").fadeOut();
  });

  /*돋보기 열렸다 닫혔다
        $(돋보기그림버튼).click(function(){
            $(검색창).toggle() })*/
  $(".search").click(function() {
    $("#search_box").toggle();
  });

  /**마우스이미지 클릭시 섹션1이동**/
  let materPosition = $("#section1").offset().top; //섹션2번 위치
  let snsPosition = $("#section2").offset().top; //섹션3번 위치
  let boardPosition = $("#section3").offset().top; //섹션4번 위치

  $(".btn_scroll").click(function() {
    //만드신 버튼 클릭시
    
    $("html,body").animate(
      //html,body 애니메이션
      {
        scrollTop: materPosition, //스크롤 탑 값을 섹션1번위치로변경
      },
      1000 //1초간 동작
    );
  });
  //**끗 */

  /*버튼컨트롤*/
  let allBtn = $(".nav-btn > li");
  let mainBtn = $(".nav-btn > li:nth-child(1),.nav-btn > li:nth-child(2)");
  let materBtn = $(".nav-btn > li:nth-child(3),.nav-btn > li:nth-child(4)");
  let snsBtn = $(".nav-btn > li:nth-child(5),.nav-btn > li:nth-child(6)");
  let boardBtn = $(".nav-btn > li:nth-child(7),.nav-btn > li:nth-child(8)");
  console.log($("html,body").scrollTop());

  $(window).scroll(function() {
    let materPosition = $("#section1").offset().top; //섹션2번 위치
    let snsPosition = $("#section2").offset().top; //섹션3번 위치
    let boardPosition = $("#section3").offset().top; //섹션4번 위치
    let scrollValue = $(document).scrollTop();
    console.log(scrollValue, materPosition);

    if (scrollValue < materPosition) {
      allBtn.removeClass("on");
      mainBtn.addClass("on");
    } else if (scrollValue < snsPosition) {
      allBtn.removeClass("on");
      materBtn.addClass("on");
    } else if (scrollValue < boardPosition) {
      allBtn.removeClass("on");
      snsBtn.addClass("on");
    } else {
      allBtn.removeClass("on");
      boardBtn.addClass("on");
    }
  });

  let isAnimate = false;

  mainBtn.click(function() {
    if (isAnimate == false) {
      isAnimate = true;
      $("html,body").animate(
        //html,body 애니메이션
        {
          scrollTop: 0, //스크롤 탑 값을 섹션1번위치로변경
        },
        700 //1초간 동작
      );
      setTimeout(() => {
        isAnimate = false;
      }, 800);
    }
  });

  materBtn.click(function() {
    if (isAnimate == false) {
      isAnimate = true;
      $("html,body").animate(
        //html,body 애니메이션
        {
          scrollTop: materPosition + 1, //스크롤 탑 값을 섹션1번위치로변경
        },
        700 //1초간 동작
      );
      setTimeout(() => {
        isAnimate = false;
      }, 800);
    }
  });

  snsBtn.click(function() {
    if (isAnimate == false) {
      isAnimate = true;
      $("html,body").animate(
        //html,body 애니메이션
        {
          scrollTop: snsPosition + 1, //스크롤 탑 값을 섹션1번위치로변경
        },
        700 //1초간 동작
      );
      setTimeout(() => {
        isAnimate = false;
      }, 800);
    }
  });

  boardBtn.click(function() {
    if (isAnimate == false) {
      isAnimate = true;
      $("html,body").animate(
        //html,body 애니메이션
        {
          scrollTop: boardPosition + 1, //스크롤 탑 값을 섹션1번위치로변경
        },
        700 //1초간 동작
      );
      setTimeout(() => {
        isAnimate = false;
      }, 800);
    }
  });
});
