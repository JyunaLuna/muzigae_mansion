$(function () {
  var $header = $("header"); //헤더를 변수에 넣기
  var $page = $("#card"); //헤더 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top; //헤더 변할 부분의 top값 구하기

  $window.resize(function () {
    //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });

  $window.on("scroll", function () {
    //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass("down", scrolled); //클래스 토글
  });
});
