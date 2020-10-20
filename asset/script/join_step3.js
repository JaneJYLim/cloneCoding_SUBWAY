//셀렉트박스에 도메인 출력
selectDomain = document.querySelectorAll(".select-domain");

let domain = ["직접입력", "naver.com", "hanmail.net", "hotmail.com", "nate.com", "empas.com", "dreamwiz.com", "lycos.co.kr", "korea.com", "gmail.com", "hamir.com"];
let domainAddOption = "";
for (let i = 0; i < domain.length; i++) {
  domainAddOption += `<option>${domain[i]}</option>`;
  for (let j = 0; j < selectDomain.length; j++) {
    selectDomain[j].innerHTML = domainAddOption;
  }
}

//이메일 도메인 선택시 변경
for(let i = 0; i < selectDomain.length; i++) {
  selectDomain[i].addEventListener("change", function(){
    
      let selectTxt = selectDomain[i].options[selectDomain[i].selectedIndex].text;
      let emailDomain = document.querySelectorAll(".email-domain");
        if(i == 0) {
          if(selectDomain[0].value == "직접입력") {
            emailDomain[0].value = ""; 
            emailDomain[0].focus();
          }
          else {
            emailDomain[0].value = selectTxt;
          }
        }
        else if(i == 1) {
          if(selectDomain[1].value == "직접입력") {
            emailDomain[1].value = ""; 
            emailDomain[1].focus();
          }
          else {
            emailDomain[1].value = selectTxt;
          }
        }
      
  });
}

//이메일 중복확인
let overlapCnt = 0;
let overlapChkBtn = document.querySelector("#overlap-chk-btn");

overlapChkBtn.addEventListener("click", function(){
  document.querySelector(".modal-layer-popup-bg").style.display="block";
  overlapCnt++;
})

//이메일 중복확인 후 닫기
let chkBtn = document.querySelector(".modal-chk-btn");

chkBtn.addEventListener("click", function() {
  document.querySelector(".modal-layer-popup-bg").style.display="none";
})

//눈 아이콘 클릭시 비밀번호 확인 가능
let changePwIcon = document.querySelectorAll(".far");
for(let i = 0; i < changePwIcon.length; i++) {
  changePwIcon[i].addEventListener("click", function() {
    let userPw = document.querySelectorAll(".user-pw");
    let userPwAttr = userPw[i].getAttribute("type");
    if(userPwAttr == "password") {
      userPw[i].setAttribute("type", "text");
      changePwIcon[i].classList.add("farToggle");
    } 
    else if (userPwAttr == "text") {
      userPw[i].setAttribute("type", "password");
      changePwIcon[i].classList.remove("farToggle");
    }
  }
)}


//유효성 검사
let completeBtn = document.querySelector(".complete-btn");

completeBtn.addEventListener("click", function(){
  let userEmail = document.querySelector("#user-email").value;
  let userDomain = document.querySelector("#user-domain").value;
  let chkUserEmail = document.querySelector("#chk-user-email").value;
  let chkUserDomain = document.querySelector("#chk-user-domain").value;
  let userPw = document.querySelector("#user-pw").value;
  let chkUserPw = document.querySelector("#chk-user-pw").value;
  let txt = document.querySelectorAll(".txt");
  let frm = document.querySelector("form");
  if (!userEmail || !userDomain || !chkUserEmail || !chkUserDomain 
    || (userEmail !== chkUserEmail) || (userDomain !== chkUserDomain)) {
      txt[0].innerHTML = "이메일이 잘못 입력되었습니다. 이메일 <br>아이디 혹은 도메인을 다시 확인해주세요";
      txt[1].innerHTML = "";
      document.querySelector("#user-email").focus();
  }
  else if (overlapCnt == 0) {
    txt[0].innerHTML = "중복확인을 하지 않았습니다. <br>중복확인을 실행해주세요";
    overlapChkBtn.focus();
  }
  else if (userPw == "" || chkUserPw == "" || userPw !== chkUserPw)  {
    txt[0].innerHTML = "";
    txt[1].innerHTML = "비밀번호가 잘못 입력되었습니다. <br>비밀번호를 확인해주세요";
    document.querySelector("#chk-user-pw").focus();
  }
  else {
    frm.submit();
  }

}); 


//아이디(이메일)에 숫자와 영어만 입력 가능
let chkEmail = document.querySelectorAll(".email");
for (let i = 0; i < chkEmail.length; i++) {
  chkEmail[i].addEventListener("keyup", function() {
    let engNumReg = /[^A-Z|a-z|0-9]/;
    let hgScReg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|~!@#$%^&*()+|<>?:{}]/g;
    if (engNumReg.test(chkEmail[i].value)) {
      chkEmail[i].value = chkEmail[i].value.replace(hgScReg,"");
    }
  })
}

//도메인에 영어와 .만 입력 가능
let chkDomain = document.querySelectorAll(".email-domain");
for (let j = 0; j < chkDomain.length; j++) {
  chkDomain[j].addEventListener("keyup", function() {
    let engReg = /[^A-Z|a-z]/;
    let hgScReg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9|\-_~!@#$%^&*()+|<>?:{}]/g;
    if (engReg.test(chkDomain[j].value)) {
      chkDomain[j].value = chkDomain[j].value.replace(hgScReg,"");
    }
  })
}

