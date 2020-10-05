
//서브메뉴 구현
$("#main-menu>li, #sub-menu").mouseover(function(){
  $("#sub-menu").stop().slideDown();
});

$("#main-menu>li, #sub-menu").mouseout(function(){
  $("#sub-menu").stop().slideUp();
});

// gnb와 submenu hover 연동
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



//main 슬라이드

function fnSlide(){
  $("#main-slide-shuttle-frame").animate({"margin-left" : "-1920px"}, 1000, function(){
    $(this).css({"margin-left" : "0"});
    $("#main-slide-shuttle-frame a:first").insertAfter("#main-slide-shuttle-frame a:last");
  });
}

setInterval(fnSlide, 3000);

//main 슬라이드 bx-btn 활성화
const pager = document.querySelectorAll(".bx-pager");
const main_slide_img = document.querySelectorAll("#main-slide-shuttle-frame a");
for(let i = 0; i<pager.length; i++){
  pager[i].addEventListener("click", function(){

    for(let j = 0; j<pager.length; j++){
      pager[j].classList.remove("active");
    }
    this.classList.add("active");
    
  });
}

//section .subway-menu 슬라이드 클릭 시 이동 구현


