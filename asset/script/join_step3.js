//셀렉트박스에 도메인 넣어줌
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
let overlapChkBtn = document.querySelector("#overlap-chk-btn");

overlapChkBtn.addEventListener("click", function(){
  document.querySelector(".modal-layer-popup-bg").style.display="block";
})

let chkBtn = document.querySelector(".modal-chk-btn");
chkBtn.addEventListener("click", function() {
  document.querySelector(".modal-layer-popup-bg").style.display="none";
})

//유효성 검사
/* let completeBtn = document.querySelector(".complete-btn");
completeBtn.addEventListener("click", fnSubmit); 
function fnSubmit() {
  let userEmail = document.querySelector("#user-email").value;
  let userDomain = document.querySelector("#user-domain").value;
  let chkUserEmail = document.querySelector("#chk-user-email").value;
  let chkUserDomain = document.querySelector("#chk-user-domain").value;

  let userPw = document.querySelector("#user-pw").value;
  let chkUserPw = document.querySelector("#chk-uesr-pw").value;

  let txt = document.querySelector("#txt");

  if (userEmail == "" || userDomain == "" || chkUserEmail == "" || chkUserDomain == "" 
  || (userEmail !== chkUserEmail) || (userDomain !== chkUserDomain)) {
    txt.innerHTML = "이메일이 잘못 입력되었습니다. <br>이메일 아이디 혹은 도메인을 <br>다시 확인해주세요";
  }
  else if (userPw == "" || chkUserPw == "") {
    alert("OK");
  }

} */