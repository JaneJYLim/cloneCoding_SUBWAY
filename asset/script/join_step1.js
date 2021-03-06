//전체동의 시작



function fnAllChk() {
  let chkVal = document.querySelector("#all-agree").checked;
  let chkBox = document.querySelectorAll(".agree-chkbox");
  let marketingChkbox = document.querySelectorAll(".marketing-agree-chkbox");

  for (let i = 0; i < chkBox.length; i++) {
    chkBox[i].checked = chkVal;
  }
  for (let j = 0; j < marketingChkbox.length; j++) {
    marketingChkbox[j].checked = chkVal;
  }
}

function fnReverseChk() {
  let homepageAgree = document.querySelector("#homepage-agree").checked;
  let personalAgree = document.querySelector("#personal-agree").checked;
  let subcardAgree = document.querySelector("#subcard-agree").checked;
  let marketingAgree = document.querySelector("#marketing-agree").checked;

  //4개의 체크박스 모두가 동시에 true라면 
  if (homepageAgree && personalAgree && subcardAgree && marketingAgree) {
    document.querySelector("#all-agree").checked = true;
  }
  //아니라면
  else {
    document.querySelector("#all-agree").checked = false;
  }
}

//전체동의 끝

//선택 전체동의 시작
function fnChooseAllChk() {
  let chkVal = document.querySelector("#marketing-agree").checked;
  let marketingChkbox = document.querySelectorAll(".marketing-agree-chkbox");

  for (let i = 0; i < marketingChkbox.length; i++) {
    marketingChkbox[i].checked = chkVal;
  }
}

function fnChooseReverseChk() {
  let smsChkbox = document.querySelector("#sms-chkbox").checked;
  let emailChkbox = document.querySelector("#email-chkbox").checked;
  let talkChkbox = document.querySelector("#talk-chkbox").checked;

  //3개의 체크박스 모두가 동시에 true라면, 전체동의, 선택동의 모두 체크
  if (smsChkbox && emailChkbox && talkChkbox) {
    document.querySelector("#marketing-agree").checked = true;
    document.querySelector("#all-agree").checked = true;
  }
  //false라면, 전체동의, 선택동의 모두 체크 해제
  else {
    document.querySelector("#marketing-agree").checked = false;
    document.querySelector("#all-agree").checked = false;
  }
}

//선택 전체동의 끝

//필수동의 체크 시, 버튼 CSS 변경
  
  $(".agree-chkbox").on("change", function(){
    let homepageAgree = document.querySelector("#homepage-agree").checked;
    let personalAgree = document.querySelector("#personal-agree").checked;
    let subcardAgree = document.querySelector("#subcard-agree").checked;
  if (homepageAgree&&personalAgree&&subcardAgree) {
    document.querySelector(".nextBtn").style.backgroundColor="#009500";
    document.querySelector(".nextBtn").style.color="#ffffff";
  }
  else {
    document.querySelector(".nextBtn").style.backgroundColor="#ffffff";
    document.querySelector(".nextBtn").style.color="#009500";
  }
})


//유효성 검사
const nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", fnValidation);
const frm = document.querySelector("form");

function fnValidation() {
  let homepageAgree = document.querySelector("#homepage-agree").checked;
  let personalAgree = document.querySelector("#personal-agree").checked;
  let subcardAgree = document.querySelector("#subcard-agree").checked;

  if (homepageAgree == false || personalAgree == false || subcardAgree == false) {
    alert("필수항목을 체크해주세요");
    document.querySelector("#all-agree").focus();
  } 
  else {
    frm.submit();
  }
}



