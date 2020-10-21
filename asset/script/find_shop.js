//table NO에 숫자 대입

let num = document.querySelectorAll("table .num");
let initNum = 423

for (let i = 0; i < num.length; i++) {
  let numTxt = initNum - i;
  num[i].innerHTML = numTxt;
}

//preventDefault(); 적용
$(".pagenation a").click(function(e) {
  e.preventDefault();
})
