$(function(){

  // header클릭시 언더바 / bold추가
  // 클릭시 언더바가 아니고 섹션별로 class추가(밑에 스크롤함수에 합치기)
  //.under 로 추가하기

  // header메뉴 클릭시 그 영역으로 이동
  $(".gnb_link a").click(function(){
    let isAni = $("html,body").is(":animated");
    if (!isAni) {
      $("html, body").animate({scrollTop: $(this.hash).offset().top + 1}, 1500);
      // 세번째 메뉴 눌러서 이동했을때 바로 underbar적용이 안돼서 1 추가함
      return false;
    }
  });
  //헤더 클릭시 section offset을 받아와서 transform추가하기

  /* 헤더 스크롤 영역 */
  $(window).scroll(function(){
    let scTop = $(window).scrollTop(); //현재 스크롤 위치
    let wHeight = $(window).height(); //브라우저 화면 높이

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

    // 각 항목별로 offset값 받아와서 scTop+wHeight랑 같을 때 on class추가 함수만들어서 사용
    // 이 함수를 사용하려면 사용하려는 클래스에 scr함수도 추가해줘야함
    // scr/ scr.on함수를 사용해서 opacity, transform효과 지정
    let scBottom = scTop + wHeight;

    onAddBottom($(".sc2_tit"));
    function onAddBottom(className){
      if (scBottom >= className.offset().top) {
        className.addClass("on");
      } else {
        className.removeClass("on");
      }
    }
    //section02
    onAddBottom($(".sc2_tit"));
    onAddBottom($(".sc2_detail_thum"));
    //section03
    onAddBottom($(".usp_group_tit"));
    onAddBottom($(".usp_box_inner"));
    onAddBottom($(".usp_txt_wrap"));
    //section04
    onAddBottom($(".sc4_tit"));
    onAddBottom($(".sc4_color_wrap"));
    onAddBottom($(".sc4_color_btn_wrap"));
    onAddBottom($(".sc4_fm_box"));
    //section05
    onAddBottom($(".sc5_img_box"));
    //section06
    onAddBottom($(".sc5_tit"));
    onAddBottom($(".sc5_txt"));
    onAddBottom($(".gal_l1"));
    onAddBottom($(".gal_l2"));
    onAddBottom($(".gal_r1"));
    onAddBottom($(".gal_r2"));
    onAddBottom($(".gal_r3"));
    onAddBottom($(".gal_r4"));
    //section07
    onAddBottom($(".evtsc1"));
    onAddBottom($(".evtsc1_info"));
    onAddBottom($(".evtsc2_box"));
    onAddBottom($(".evtsc3"));

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
  // 왼쪽 nav fixed 클래스 추가 (position:fixed)
  // usp_nav_wrap - top
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var sc3_usp_top = $('.sc3_usp_inner').offset().top;
    var sc3_sub_top = $('.section03_sub').offset().top;
    var win_h = $(window).height();
    var scroll_l = $(window).scrollLeft();

  	if (scroll < sc3_usp_top) {
      $('.usp_nav_wrap').removeClass('fixed end').css({'left':'0px'});
    }	else if (scroll >= sc3_usp_top && scroll < (sc3_sub_top-win_h*1)) {
      //inner가 딱 천장에 닿으면 fixed시작
      // sub 버튼이 나타나기 전까지
  		$('.usp_nav_wrap').removeClass('end').addClass('fixed').css({'left':-scroll_l+'px'});
  	} else {
      $('.usp_nav_wrap').removeClass('fixed').addClass('end').css({'left':'0px'});
    }

  });


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
