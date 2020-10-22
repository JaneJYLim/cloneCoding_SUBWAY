//서브메뉴 구현 시작
$("#main-menu>li, #sub-menu").mouseover(function () {
  $("#sub-menu").stop().slideDown();
});

$("#main-menu>li, #sub-menu").mouseout(function () {
  $("#sub-menu").stop().slideUp();
});
//서브메뉴 구현 끝

// gnb와 submenu hover 연동 시작
let main_menu_a = document.querySelectorAll("#main-menu a");
let sub_menu = document.querySelectorAll(".sub-menu");
let sub_menu_a = document.querySelectorAll(".sub-menu a");

//submenu를 mouseover했을 때 hover 적용
for (let i = 0; i < sub_menu_a.length; i++) {
  sub_menu_a[i].addEventListener("mouseover", function () {
    this.classList.add("sub-menu-hover");
    this.style.color = "#009223";
  });
}

//submenu와  mainmenu연동
for(let i = 0; i < sub_menu.length; i++) {
  $(sub_menu).eq(i).mouseover(function() {
    $(main_menu_a).eq(i).css({"color":"#009223"});
  });
  $(main_menu_a).eq(i).mouseover(function() {
    $(main_menu_a).eq(i).css({"color":"#009223"});
  });
}

//submenu를 mouseout했을 때 hover 해제
for (let i = 0; i < sub_menu_a.length; i++) {
  sub_menu_a[i].addEventListener("mouseout", function () {
    this.classList.remove("sub-menu-hover");
    this.style.color = "#888";
    for (let j = 0; j < main_menu_a.length; j++) {
      if (i !== j) {
        main_menu_a[j].classList.remove("main-menu-hover");
      }
    }
  });
}

for(let i = 0; i < sub_menu.length; i++) {
  $(sub_menu).eq(i).mouseout(function() {
    $(main_menu_a).eq(i).css({"color":"#000"});
  });
  $(main_menu_a).eq(i).mouseout(function() {
    $(main_menu_a).eq(i).css({"color":"#000"});
  });
}

// gnb와 submenu hover 연동 끝

//Top scroll 
$(document).ready(function() {
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos >= 60) {
      $(".topBtnArea").addClass("on");
    }
    else {
      $(".topBtnArea").removeClass("on");
    }
  });
  $(".topBtn").click(function() {
    $(window).scrollTop(0);
  })
})