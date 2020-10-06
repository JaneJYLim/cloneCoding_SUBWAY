
//서브메뉴 구현 시작
$("#main-menu>li, #sub-menu").mouseover(function(){
  $("#sub-menu").stop().slideDown();
});

$("#main-menu>li, #sub-menu").mouseout(function(){
  $("#sub-menu").stop().slideUp();
});
//서브메뉴 구현 끝

// gnb와 submenu hover 연동 시작
const main_menu_a = document.querySelectorAll("#main-menu a");
const sub_menu = document.querySelectorAll(".sub_menu");
const sub_menu_a = document.querySelectorAll(".sub-menu a");

//submenu를 mouseover했을 때 hover 적용
for (let i = 0; i < sub_menu_a.length; i++) {
  sub_menu_a[i].addEventListener("mouseover", function(){
    this.classList.add("sub-menu-hover");
    this.style.color= "#009223";
  });
}

 //submenu를 mouseout했을 때 hover 해제
for (let i = 0; i < sub_menu_a.length; i++) {
  sub_menu_a[i].addEventListener("mouseout", function(){
    this.classList.remove("sub-menu-hover");
    this.style.color= "#888";
    for (let j = 0; j < main_menu_a.length; j++) {
      if (i !== j) {
        main_menu_a[j].classList.remove("main-menu-hover");
      }
    }
  });
}
// gnb와 submenu hover 연동 끝