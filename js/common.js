$(function(){
  /* 헤더 스크롤 영역 */
  $(window).scroll(function(){
    let scTop = $(window).scrollTop(); //현재 스크롤 위치
    let wHeight = $(window).height(); //브라우저 화면 높이

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

      // scTop에 화면 높이를 더한만큼 하고 그걸 지날때마다 on추가
    });
  });

});
