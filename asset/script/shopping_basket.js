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
const minusBtn = document.querySelectorAll(".minus-btn");
const orderNum = document.querySelectorAll(".order-num");
const plusBtn = document.querySelectorAll(".plus-btn");
const price = document.querySelectorAll(".price");
const addOrderPrice = document.querySelectorAll(".add-order-price");
const sum = document.querySelectorAll(".sum");


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
    if (addOrderPrice[i] == undefined) {
      sum[i].innerHTML = parseInt(price[i].innerHTML) * orderNum[i].value;
    }
    else {
      sum[i].innerHTML = (parseInt(price[i].innerHTML) + parseInt(addOrderPrice[i].innerHTML)) * orderNum[i].value;
    }
    totalPrice +=  parseInt(sum[i].innerHTML);
  }
  totalSum.innerHTML = totalPrice;
}

  totalPrice();

  // 갯수, 수량관련 끝