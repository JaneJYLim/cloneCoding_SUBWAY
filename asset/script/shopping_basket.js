//전체동의 시작

function fnAllChk() {
  let chkVal = document.querySelector("#select-all").checked;
  let chkBox = document.querySelectorAll(".select-chkbox");

  for (let i = 0; i < chkBox.length; i++) {
    chkBox[i].checked = chkVal;
  }
}

// function fnReverseChk() {
//   let selectChkbox = document.querySelectorAll(".select-chkbox").checked;

//   //선택 체크박스 모두가 동시에 true라면 
//   for (let i = 0; i <selectChkbox.length; i++) {
//     if (selectChkbox[i] == false) {
//       document.querySelector("#select-all").checked = true;
//     }
//     //아니라면
//     else {
//       document.querySelector("#select-all").checked = false;
//     }
//   }
// }

//전체동의 끝


// 갯수, 수량관련

//마이너스 버튼 클릭 시 수량 감소
const minusBtn = document.querySelectorAll(".minus-btn");
const orderNum = document.querySelectorAll(".order-num");




for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function() {
    if (orderNum[i].value > 1) {
      orderNum[i].value--;
    } else {
      alert("최소수량은 1개입니다.");
      orderNum[i].value = 1;
    }
  });    
};

//플러스 버튼 클릭 시 수량 증가
const plusBtn = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function() {
    let orderNum = document.querySelectorAll(".order-num");
    if (orderNum[i].value < 99) {
      orderNum[i].value++;
    } else {
      alert("최대수량은 99개입니다.");
      orderNum[i].value = 99;
    }
    });    
  };

  
// 총 주문금액
const price = document.querySelectorAll(".price");
const addOrderPrice = document.querySelectorAll(".add-order-price");
const sum = document.querySelectorAll(".sum");
let lastSum = document.querySelector("#last-sum");
let lastPrice=0;
for (let i = 0; i < sum.length; i++) {
  if (addOrderPrice[i] == undefined) {
    sum[i].innerHTML = parseInt(price[i].innerHTML) * orderNum[i].value;
  }
  else {
    sum[i].innerHTML = (parseInt(price[i].innerHTML) + parseInt(addOrderPrice[i].innerHTML));
  }
  lastPrice +=  parseInt(sum[i].innerHTML);
}
lastSum.innerHTML = lastPrice;
