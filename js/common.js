$(function(){

  // header클릭시 언더바 / bold추가
  $(".header_a").on("click", function(){
    $(".header_a").removeClass("on");
    $(this).addClass("on");
    return false;
  });

  /* 헤더 스크롤 영역 */
  $(window).scroll(function(){
    let scTop = $(window).scrollTop(); //현재 스크롤 위치
    let wHeight = $(window).height(); //브라우저 화면 높이
    // console.log(scTop);

    $(".section").each(function(){
      // 각 섹션별 offset으로 위치를 받아옴
      let thisOffset = $(this).offset().top;
      // se1 = 0
      // se2 =969
      // se3 =1352.875
      // se4 =5122.484375
      // se5 =7038.484375
      // se6 =8347.53125
      // se7 =11666.671875
      // 각 센션별로 헤더의 컬러 바꿀때 dark, light 클래스 추가
      // 각 섹션에 도착했을때 그 섹션에 on클래스 추가
      if (scTop >= 0 && scTop < 969) {
        $("header").removeClass("light");
        $("header").removeClass("dark");
      } else if (scTop >= 969 && scTop < 1352) {
        $("header").removeClass("dark");
        $("header").addClass("light");
      } else if (scTop >= 1352 && scTop < 5122) {
        $("header").removeClass("light");
        $("header").addClass("dark");
      } else if (scTop >= 5122 && scTop < 7038) {
        $("header").removeClass("dark");
        $("header").addClass("light");
      } else if (scTop >= 7038 && scTop < 8347) {
        $("header").removeClass("light");
        $("header").addClass("dark");

      } else if (scTop >= 8347 && scTop < 11666) {

      } else if (scTop >= 11666) {

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
  $(".usp_nav").click(function(){
    $(".usp_nav").removeClass("on");
    $(this).addClass("on");
    //버튼 클릭시 오른쪽 스크롤 메뉴 해당ul display block하는 .on추가
    if ($(".usp_nav1").hasClass("on") == true) {
      $(".usp_wrap").removeClass("on"); //전체초기화
      $(".usp_wrap1").addClass("on");
    } else if ($(".usp_nav2").hasClass("on") == true) {
      $(".usp_wrap").removeClass("on");
      $(".usp_wrap2").addClass("on");
    } else if ($(".usp_nav3").hasClass("on") == true) {
      $(".usp_wrap").removeClass("on");
      $(".usp_wrap3").addClass("on");
    }
  });
  // 왼쪽 nav특정 위치(scTop:2000)에서 fixed 클래스 추가 (position:fixed) ->scroll함수 안에서 구현함

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
    } else if ($(".btn_sc4_color2").hasClass("on")) { //블루 피코크 컬러
      $(".sc4_color1").removeClass("on");
      $(".sc4_placer1").removeClass("on");
      $(".sc4_placer_txt1").removeClass("on");
      $(".btn_sc4_color1").removeClass("on");
      $(".sc4_color2").addClass("on");
      $(".sc4_placer2").addClass("on");
      $(".sc4_placer_txt2").addClass("on");
      $(".btn_sc4_color2").addClass("on");
    }
  });


});
