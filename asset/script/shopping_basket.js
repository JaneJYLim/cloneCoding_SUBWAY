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
    } 
    else {
      document.querySelector("#select-all").checked = false;
    }
  }
}

//전체동의 끝

//선택 삭제
let deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", deleteChecked);

let selectChkbox = document.querySelectorAll(".select-chkbox");
let orderInfoContainer = document.querySelectorAll(".order-info-container");
function deleteChecked() {
  if (confirm ("선택한 상품을 삭제하시겠습니까?")) {
    for (let i = 0; i < selectChkbox.length; i++) {
      if (!selectChkbox[0].checked && !selectChkbox[1].checked) {
        alert("삭제할 상품을 선택해주세요.");
        return;
      }
      else if (selectChkbox[0].checked && selectChkbox[1].checked){
        orderInfoContainer.forEach(function(item) {
          item.remove();
        })
        totalSum.innerHTML = 0;
      }
      else if (selectChkbox[0].checked) {
        $(orderInfoContainer[0]).detach();
        totalPrice = sum[1].dataset.sum;
        totalSum.innerHTML = sepComma(totalPrice.toString());
        document.querySelector("#select-all").checked = true;
      }
      else if (selectChkbox[1].checked) {
        $(orderInfoContainer[1]).detach();
        totalPrice = sum[0].dataset.sum;
        totalSum.innerHTML = sepComma(totalPrice.toString());
        document.querySelector("#select-all").checked = true;
      }      
    } 
    fnAllChk();
    fnReverseChk();
  }

}

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
    } 
    else {
      alert("최소수량은 1개입니다.");
      orderNum[i].value = 1;
    }
    fnTotalPrice();
  });    
};

//플러스 버튼 클릭 시 수량 증가
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function() {
    if (orderNum[i].value < 99) {
      orderNum[i].value++;
    } 
    else {
      alert("최대수량은 99개입니다.");
      orderNum[i].value = 99;
    }
    fnTotalPrice();
  });    
};

//수량 직접 변경시 가격 변동
for(let i = 0; i < orderNum.length; i++) {
  orderNum[i].addEventListener("focusout", function() {
    fnTotalPrice();
  })
}


//선택해제에 따른 가격 조절 시작
//선택해제시, 가격 조절
let totalSum = document.querySelector("#total-sum");
function fnPriceChk() {
  
  for (let i = 0; i < selectChkbox.length; i++) {
    selectChkbox[i].addEventListener("change", function() {
      totalSum.innerHTML = 0;
      if (selectChkbox[0].checked == false && selectChkbox[1].checked == false) {
        return;
      }
      else if (selectChkbox[0].checked == false) {
        sum[1].dataset.sum = sepComma(sum[1].dataset.sum);
        console.log(sum[1].dataset.sum);
        totalSum.innerHTML = sum[1].dataset.sum;
      }
      else if (selectChkbox[1].checked == false) {
        sum[0].dataset.sum = sepComma(sum[0].dataset.sum);
        totalSum.innerHTML = sum[0].dataset.sum;
      }
      else if (selectChkbox[0].checked && selectChkbox[1].checked) {
        console.log(sum[0].dataset.sum);
        console.log(sum[1].dataset.sum);
        sum[0].dataset.sum = removeComma(sum[0].dataset.sum);
        sum[1].dataset.sum = removeComma(sum[1].dataset.sum);
        totalPrice = parseInt(sum[0].dataset.sum) + parseInt(sum[1].dataset.sum);
        totalSum.innerHTML = sepComma(totalPrice.toString());
      }
    })
  }
  //전체체크해제시, 가격 조절
  let selectAll = document.querySelector("#select-all");
    selectAll.addEventListener("change", function() {
      if (selectAll.checked) {
        fnTotalPrice();
      }
      else if (!selectAll.checked) {
        totalSum.innerHTML = 0;
      }
  })
}
fnPriceChk();
//선택해제에 따른 가격 조절 끝

// 총 주문금액
function fnTotalPrice() {
  
  let totalSum = document.querySelector("#total-sum");
  let selectChkbox = document.querySelectorAll(".select-chkbox");
  let totalPrice = 0;
  for (let i = 0; i < sum.length; i++) {
    let price = document.querySelectorAll(".price");
    let addOrderPrice = document.querySelectorAll(".add-order-price");

    if (addOrderPrice[i] == undefined) {

      price[i].innerHTML = removeComma(price[i].innerHTML);
      
      selectChkbox[i].dataset.price =  parseInt(price[i].innerHTML) * orderNum[i].value;
      sum[i].dataset.sum = selectChkbox[i].dataset.price;
      sum[i].dataset.sum = sepComma(sum[i].dataset.sum);
      sum[i].innerHTML = sum[i].dataset.sum;

      price[i].innerHTML = sepComma(price[i].innerHTML);
    }
    else {

      price[i].innerHTML = removeComma(price[i].innerHTML);
      addOrderPrice[i].innerHTML = removeComma(addOrderPrice[i].innerHTML);

      selectChkbox[i].dataset.price = (parseInt(price[i].innerHTML) + parseInt(addOrderPrice[i].innerHTML)) * orderNum[i].value;
      sum[i].dataset.sum = selectChkbox[i].dataset.price;
      sum[i].dataset.sum = sepComma(sum[i].dataset.sum);
      sum[i].innerHTML = sum[i].dataset.sum;

      price[i].innerHTML = sepComma(price[i].innerHTML);
      addOrderPrice[i].innerHTML = sepComma(addOrderPrice[i].innerHTML);
    }  
    sum[i].dataset.sum = removeComma(sum[i].dataset.sum);
    totalPrice += parseInt(sum[i].dataset.sum);

  }
  totalPrice = sepComma(totalPrice.toString());
  totalSum.innerHTML = totalPrice;
  totalSum.dataset.totalPrice = totalPrice;
}
fnTotalPrice();
// 갯수, 수량관련 끝


/* 천단위 구분 쉼표 적용 시작 */

//천단위 구분 함수
function sepComma(inputMoney) {
    var pattern = /\B(?=(\d{3})+(?!\d))/g;
    var res = inputMoney.replace(pattern, ",");
    
    return res;
}

//천단위 구분 쉼표 제거 
function removeComma(restore) {
    if (restore.search(',')) {
        arrComma = restore.split(',');
        for (i = 0; ; i++) {
            if (!arrComma[i]) break;

            if (i == 0) {
                restore = arrComma[i];
            } else {
                restore += arrComma[i];
            }
        }
    }
    return restore;
}
/* 천단위 구분 쉼표 적용 끝 */