//table NO에 숫자 대입

let num = document.querySelectorAll("table .num");
let initNum = 142;

for (let i = 0; i < num.length; i++) {
  let numTxt = initNum - i;
  num[i].innerHTML = numTxt;
}