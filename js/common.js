$(function(){

  // header클릭시 언더바 / bold추가
  // 클릭시 언더바가 아니고 섹션별로 class추가(밑에 스크롤함수에 합치기)
  //.under 로 추가하기

  // header메뉴 클릭시 그 영역으로 이동
  $(".gnb_link a").click(function(){
    let isAni = $("html,body").is(":animated");
    if (!isAni) {
      $("html, body").animate({scrollTop: $(this.hash).offset().top}, 1500);
      return false;
    }
  });

  /* 헤더 스크롤 영역 */
  $(window).scroll(function(){
    let scTop = $(window).scrollTop(); //현재 스크롤 위치
    let wHeight = $(window).height(); //브라우저 화면 높이
    // console.log(scTop);

    $(".section").each(function(){
      // 각 섹션별 offset으로 위치를 받아옴
      let thisOffset = $(this).offset().top;

      let sc1Offset = $(".section01").offset().top;
      let sc2Offset = $(".section02").offset().top;
      let sc3Offset = $(".section03").offset().top;
      let sc4Offset = $(".section04").offset().top;
      let sc5Offset = $(".section05").offset().top;
      let sc6Offset = $(".section06").offset().top;
      let sc7Offset = $(".section07").offset().top;
      // 각 센션별로 헤더의 컬러 바꿀때 dark, light 클래스 추가
      // 각 섹션에 도착했을때 그 섹션에 on클래스 추가
      if (scTop >= sc1Offset && scTop < 10) {
        $("header").removeClass("light");
        $("header").removeClass("dark");
      } else if (scTop >= 10 && scTop < sc2Offset) {
        $("header").removeClass("light");
        $("header").addClass("dark");
        $(".gnb_link").removeClass("under"); //header에 underline추가하는 class
        $(".gnb_link1").addClass("under");
      } else if (scTop >= sc2Offset && scTop < sc3Offset) {
        $("header").removeClass("dark");
        $("header").addClass("light");
        $(".gnb_link").removeClass("under");
        $(".gnb_link2").addClass("under");
      } else if (scTop >= sc3Offset && scTop < sc4Offset) {
        $("header").removeClass("light");
        $("header").addClass("dark");
        $(".gnb_link").removeClass("under");
        $(".gnb_link2").addClass("under");
      } else if (scTop >= sc4Offset && scTop < sc5Offset) {
        $("header").removeClass("dark");
        $("header").addClass("light");
        $(".gnb_link").removeClass("under");
        $(".gnb_link2").addClass("under");
      } else if (scTop >= sc5Offset && scTop < sc6Offset) {
        $("header").removeClass("light");
        $("header").addClass("dark");
        $(".gnb_link").removeClass("under");
        $(".gnb_link2").addClass("under");
      } else if (scTop >= sc6Offset && scTop < sc7Offset) {
        $(".gnb_link").removeClass("under"); //header에 underline추가하는 class
        $(".gnb_link3").addClass("under");
      } else if (scTop >= sc7Offset) {

      }

      // 각 섹션이 바닥을 지날때 on class추가하기
      // if (scTop + wHieght >)

      // scTop에 화면 높이를 더한만큼 하고 그걸 지날때마다 on추가

      // 왼쪽 nav특정 위치(scTop:2000)에서 fixed 클래스 추가 (position:fixed)
      // (scTop) 2000이상 3750이하 지나면 .end 추가해서 아래쪽에 있도록
      if (scTop >= 2000 && scTop < 3500) {
        $(".usp_nav_wrap").removeClass("end");
        $(".usp_nav_wrap").addClass("fixed");
      } else if (scTop >= 3500) {
        $(".usp_nav_wrap").removeClass("fixed");
        $(".usp_nav_wrap").addClass("end");
      } else {
        $(".usp_nav_wrap").removeClass("fixed");
        $(".usp_nav_wrap").removeClass("end");
      }
    });


    // 각 항목별로 offset값을 받아와서 scTop+wHeight값을 매칭시켜서 .on을 추가시키기
    // sc5 동영상 영역 배경부터 적용해보기
    // sc5의 top+wHeight값을 지날때 section5에 on class추가하기
    $(".section05").offset().top;
    if (scTop + 200>= $(".section05").offset().top) {
      $(".section05").addClass("on");
    } else {
      $(".section05").removeClass("on")
    }
  });

  // section03 왼쪽 nav 버튼클릭시 .on 추가
  // 클릭했을때 섹션의 슬라이드 상단으로 이동 (animate) isAni 줘서 움직이지 않을때만 작동되는
  $(".usp_nav").click(function() {
    let isAni = $("html,body").is(":animated"); //애니메이션 중 일때 중첩 안되게
    if (!isAni) {
      $(".usp_nav").removeClass("on");
      $(this).addClass("on");
      //버튼 클릭시 오른쪽 스크롤 메뉴 해당ul display block하는 .on추가
      // 왼쪽 nav를 클릭했을때 텍스트 변경
      if ($(".usp_nav1").hasClass("on") == true) {
        $(".usp_wrap").removeClass("on"); //전체초기화
        $(".usp_wrap1").addClass("on");
        // 미니바 hasClass on이면 prev 파티션, next 멀티 사이드장
        $(".btn_usp_nav_prev").text("파티션");
        $(".btn_usp_nav_next").text("멀티 사이드장");
      } else if ($(".usp_nav2").hasClass("on") == true) {
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap2").addClass("on");
        // 멀티사이드장 hasClass on prev 미니바, next 파티션
        $(".btn_usp_nav_prev").text("미니바");
        $(".btn_usp_nav_next").text("파티션");
      } else if ($(".usp_nav3").hasClass("on") == true) {
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap3").addClass("on");
        // 파티션 hasClass on prev 멀티 사이드장, next미니바로 text변경하기
        $(".btn_usp_nav_prev").text("멀티 사이드장");
        $(".btn_usp_nav_next").text("미니바");
      }

      //클릭시 새로바뀐 슬라이드 보여주기 위해 상단으로 이동
      $("html, body").animate({
        scrollTop: $(".sc3_usp_wrap").offset().top - 100
      }, 1000);
      return false;
    }
  });
  // 왼쪽 nav특정 위치(scTop:2000)에서 fixed 클래스 추가 (position:fixed) ->scroll함수 안에서 구현함

  //section03 아래 좌우 버튼
  //prev btn
  $(".btn_usp_nav_prev").click(function() {
    let isAni = $("html,body").is(":animated"); //애니메이션 중 일때 중첩 안되게
    if (!isAni) {
      // text에 해당하는 영역 on 추가
      if ($(this).text() == '파티션') { //text가 파티션이면 파티션 영역 on, 텍스트도 변경, wrap도 변경
        $(".usp_nav").removeClass("on");
        $(".usp_nav3").addClass("on");
        $(".btn_usp_nav_prev").text("멀티 사이드장");
        $(".btn_usp_nav_next").text("미니바");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap3").addClass("on");
      } else if ($(this).text() == '미니바') {
        $(".usp_nav").removeClass("on");
        $(".usp_nav1").addClass("on");
        $(".btn_usp_nav_prev").text("파티션");
        $(".btn_usp_nav_next").text("멀티 사이드장");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap1").addClass("on");
      } else if ($(this).text() == '멀티 사이드장') {
        $(".usp_nav").removeClass("on");
        $(".usp_nav2").addClass("on");
        $(".btn_usp_nav_prev").text("미니바");
        $(".btn_usp_nav_next").text("파티션");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap2").addClass("on");
      }
      //클릭시 새로바뀐 슬라이드 보여주기 위해 상단으로 이동
      $("html, body").animate({
        scrollTop: $(".sc3_usp_wrap").offset().top - 100
      }, 1000);
      return false;
    }
  });
  //next btn
  $(".btn_usp_nav_next").click(function() {
    let isAni = $("html,body").is(":animated"); //애니메이션 중 일때 중첩 안되게
    if (!isAni) {

      if ($(this).text() == '멀티 사이드장') {
        $(".usp_nav").removeClass("on");
        $(".usp_nav2").addClass("on");
        $(".btn_usp_nav_prev").text("미니바");
        $(".btn_usp_nav_next").text("파티션");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap2").addClass("on");
      } else if ($(this).text() == '파티션') {
        $(".usp_nav").removeClass("on");
        $(".usp_nav3").addClass("on");
        $(".btn_usp_nav_prev").text("멀티 사이드장");
        $(".btn_usp_nav_next").text("미니바");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap3").addClass("on");
      } else if ($(this).text() == '미니바') {
        $(".usp_nav").removeClass("on");
        $(".usp_nav1").addClass("on");
        $(".btn_usp_nav_prev").text("파티션");
        $(".btn_usp_nav_next").text("멀티 사이드장");
        $(".usp_wrap").removeClass("on");
        $(".usp_wrap1").addClass("on");
      }
      //클릭시 새로바뀐 슬라이드 보여주기 위해 상단으로 이동
      $("html, body").animate({
        scrollTop: $(".sc3_usp_wrap").offset().top - 100
      }, 1000);
      return false;
    }
  });

  // section04 컬러선택 버튼
  $(".btn_sc4_color").click(function(){
    $(".btn_sc4_color").removeClass("on");
    $(this).addClass("on");
    // 버튼별로 클릭시 하위요소들의 .on추가 및 제거
    if ($(".btn_sc4_color1").hasClass("on")) { //클라우드컬러
      $(".sc4_color2").removeClass("on");
      $(".sc4_placer2").removeClass("on");
      $(".sc4_placer_txt2").removeClass("on");
      $(".btn_sc4_color2").removeClass("on");
      $(".sc4_color1").addClass("on");
      $(".sc4_placer1").addClass("on");
      $(".sc4_placer_txt1").addClass("on");
      $(".btn_sc4_color1").addClass("on");

      $(".sc4_color2").removeClass("on2");

    } else if ($(".btn_sc4_color2").hasClass("on")) { //블루 피코크 컬러
      $(".sc4_color1").removeClass("on");
      $(".sc4_placer1").removeClass("on");
      $(".sc4_placer_txt1").removeClass("on");
      $(".btn_sc4_color1").removeClass("on");
      $(".sc4_color2").addClass("on");
      $(".sc4_placer2").addClass("on");
      $(".sc4_placer_txt2").addClass("on");
      $(".btn_sc4_color2").addClass("on");
        //블루 누를때만 추가되게 해서 blue누르면 left: 23.5%되게, 텍스트도 이동
      $(".sc4_color2").addClass("on2");
    }
  });

  //section7 concept버튼
  //버튼클릭 .on 추가 후 on 있으면 onimg display:block,없으면 offimg display block
  $(".btn_evtsc2").click(function(){
    $(".btn_evtsc2").removeClass("on");
    $(this).addClass("on");
  });


});
