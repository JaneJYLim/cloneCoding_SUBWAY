//전체동의 시작

function fnAllChk() {
  let chkVal = document.querySelector("#all-agree").checked;
  let chkBox = document.querySelectorAll(".agree-chkbox");
  let marketingChkbox = document.querySelectorAll(".marketing-agree-chkbox");

  for(let i = 0; i < chkBox.length; i++) {
    chkBox[i].checked = chkVal;
  }
  for(let j = 0; j < marketingChkbox.length; j++) {
    marketingChkbox[j].checked = chkVal;
  }
}

function fnReverseChk() {
  let chkBox01 = document.querySelector("#homepage-agree").checked;
  let chkBox02 = document.querySelector("#personal-agree").checked;
  let chkBox03 = document.querySelector("#subcard-agree").checked;
  let chkBox04 = document.querySelector("#marketing-agree").checked;

  
  
  //4개의 체크박스 모두가 동시에 true라면 
  if (chkBox01 && chkBox02 && chkBox03 && chkBox04) {     
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

  for(let i = 0; i < marketingChkbox.length; i++) {
    marketingChkbox[i].checked = chkVal;
  }
}


function fnChooseReverseChk() {
  let smsChkbox = document.querySelector("#sms-chkbox").checked;
  let emailChkbox = document.querySelector("#email-chkbox").checked;
  let talkChkbox = document.querySelector("#talk-chkbox").checked;
  
  //3개의 체크박스 모두가 동시에 true라면
  if (smsChkbox && emailChkbox && talkChkbox) {
    document.querySelector("#marketing-agree").checked = true;
  }
  else {
    document.querySelector("#marketing-agree").checked = false;
  }


}

//선택 전체동의 끝