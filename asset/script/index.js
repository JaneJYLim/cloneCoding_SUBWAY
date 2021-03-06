//main 슬라이드 구현 시작
// tiny-slider 라이브러리 연동
var slider = tns({
  "container": ".autoplay",
  "items": 1,
  "speed": 300,
  "autoplay": true,
  "autoplayHoverPause": true,
  "autoplayTimeout": 3000,
  "swipeAngle": false,
  "autoplayText": [
    "▶",
    "❚❚"
  ],
});
//main 슬라이드 구현 끝

//section.subway-menu 시작 
//section.subway-menu gnb 클릭 시 해당 슬라이드 출현 시작
const subway_menu_gnb = document.querySelectorAll("#subway-menu-gnb li a");
const subway_menu_slide_shuttle_frame = document.querySelectorAll(".subway-menu-slide-shuttle-frame");
for (let i = 0; i < subway_menu_gnb.length; i++) {
  subway_menu_gnb[i].addEventListener("click", function (e) {
    e.preventDefault();

    for (let j = 0; j < subway_menu_slide_shuttle_frame.length; j++) {
      subway_menu_slide_shuttle_frame[j].style.marginLeft = "1280px";
      subway_menu_gnb[j].style.color = "#666";
    }
    subway_menu_slide_shuttle_frame[i].style.marginLeft = "0";
    subway_menu_gnb[i].style.color = "#009223";

  });
}
//section.subway-menu gnb 클릭 시 해당 슬라이드 출현 끝
//이미지 hover시 css요소 변경 시작
$(".subway-menu-slide-wrap a").mouseover(function () {
  $(this).children("img").addClass("scale-active");
  $(this).children("p").addClass("none");
  $(this).children("p").next().css({
    "display": "block"
  });
})

$(".subway-menu-slide-wrap a").mouseout(function () {
  $(this).children("img").removeClass("scale-active");
  $(this).children("p").removeClass("none");
  $(this).children("p").next().css({
    "display": "none"
  });
})
//이미지 hover시 css요소 변경 끝
//section.subway-menu 끝

//section#subway box4 슬라이드 bx-btn 활성화 시작
const section_pager = document.querySelectorAll(".section-bx-btn .bx-pager");
const section_box4 = document.querySelectorAll("#main-slide-img a");
for (let i = 0; i < section_pager.length; i++) {
  section_pager[i].addEventListener("click", function () {
    //해당 pager를 제외한 나머지 active 비활성화
    for (let j = 0; j < section_pager.length; j++) {
      section_pager[j].classList.remove("active");
    }
    //해당 pager 활성화
    this.classList.add("active");
  })
}
//section#subway box4 슬라이드 bx-btn 활성화 끝
//section#subway box4의 슬라이드 구현 시작
$(".section-bx-btn .bx-pager:first").click(function () {
  $("#subway-box4-slide-shuttle-frame img:first").fadeIn(200);
  $("#subway-box4-slide-shuttle-frame img:last").fadeOut(200);
});

$(".section-bx-btn .bx-pager:last").click(function () {
  $("#subway-box4-slide-shuttle-frame img:last").fadeIn(200);
  $("#subway-box4-slide-shuttle-frame img:first").fadeOut(200);
});

//section#subway box4의 슬라이드 구현 끝



$(".subway-menu-slide-wrap a, #subway-box3-list a, #footer a").on("click", function(e) {
  e.preventDefault();
})

// 로드시, 팝업창 구현 시작

document.querySelector(".modal-chk-btn").addEventListener("click", function() {
  document.querySelector(".modal-layer-popup-bg").style.display="none";
})