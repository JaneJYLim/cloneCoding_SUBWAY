
//전체 게시물 목록 번호 삽입
function fnNum() {
  let num = document.querySelectorAll(".num");

  for(let i = num.length; i > 0; i--) {
    num[num.length-i].innerHTML = i;
  }
}

fnNum();

