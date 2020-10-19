//전체동의 시작
//전제선택 checked시 개별선택 checked
function fnAllChk() {
  let chkVal = document.querySelector("#select-all").checked;
  let chkBox = document.querySelectorAll(".select-chkbox");

  for (let i = 0; i < chkBox.length; i++) {
    chkBox[i].checked = chkVal;
  }
}
//개별선택 체크박스 모두가 checked라면 전체선택 checked
function fnReverseChk() {
  let chkbox = document.querySelectorAll(".select-chkbox");
  for (let i = 0; i < chkbox.length; i++) {
    if (chkbox[0].checked && chkbox[1].checked) {
      document.querySelector("#select-all").checked = true;
    } else {
      document.querySelector("#select-all").checked = false;
    }
  }
}

//전체동의 끝


//수량, 가격 관련 시작
let minusBtn = document.querySelectorAll(".minus-btn");
let orderNum = document.querySelectorAll(".order-num");
let plusBtn = document.querySelectorAll(".plus-btn");
let price = document.querySelectorAll(".price");
let addOrderPrice = document.querySelectorAll(".add-order-price");
let sum = document.querySelectorAll(".sum");


//마이너스 버튼 클릭 시 수량 감소
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function() {
    if (orderNum[i].value > 1) {
      orderNum[i].value--;
    } else {
      alert("최소수량은 1개입니다.");
      orderNum[i].value = 1;
    }
    totalPrice();
  });    
};

//플러스 버튼 클릭 시 수량 증가
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function() {
    if (orderNum[i].value < 99) {
      orderNum[i].value++;
    } else {
      alert("최대수량은 99개입니다.");
      orderNum[i].value = 99;
    }
    totalPrice();
  });    
  };

// 총 주문금액
function totalPrice() {
  let totalSum = document.querySelector("#total-sum");
  let totalPrice = 0;
  
  for (let i = 0; i < sum.length; i++) {
    console.log(typeof price[i].innerHTML);
    console.log(price[i].innerHTML);
    if (addOrderPrice[i] == undefined) {
      sum[i].innerHTML = parseInt(price[i].innerHTML) * orderNum[i].value;
      console.log("1 " + sum[i].innerHTML, price[i].innerHTML, orderNum[i].value);
    }
    else {
      sum[i].innerHTML = (parseInt(price[i].innerHTML) + parseInt(addOrderPrice[i].innerHTML)) * orderNum[i].value;
      console.log("2 " + sum[i].innerHTML, price[i].innerHTML, orderNum[i].value);
    }  
    totalPrice +=  parseInt(sum[i].innerHTML);
  }
  totalPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalSum.innerHTML = totalPrice; //천단위마다 "," 찍어주기
  // fnComma();
}
totalPrice();
// 갯수, 수량관련 끝


//숫자 , 찍어주기
// function fnComma() {
//   for (let i = 0; i < price.length; i++) {
//     price[i].innerHTML = price[i].innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     sum[i].innerHTML = sum[i].innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     if (addOrderPrice[i] == undefined) {
//       continue;
//     }
//     else {
//       addOrderPrice[i].innerHTML = addOrderPrice[i].innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }      
//   }
// }
