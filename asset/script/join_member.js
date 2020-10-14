//전화번호 숫자 이외의 문자 입력시 제거

//수정할것!

/* let uPhone = document.querySelector("#uPhone");
uPhone.addEventListener("keyup",fnChkPhoneReg);

function fnChkPhoneReg() {
  let uPhone_value = document.querySelector("#uPhone").value;
  let chkPhoneReg =/[^0-9]/;
  if (uPhone_value.length > 0) {
    if (uPhone_value.match(chkPhoneReg)) {
      uPhone_value = uPhone_value.replace(chkPhoneReg, "");
    }
    
  } */
  email = document.querySelector("#email");

  let domain = ["직접입력", "naver.com", "hanmail.net", "hotmail.com", "nate.com", "empas.com", "dreamwiz.com", "lycos.co.kr", "korea.com", "gmail.com", "hamir.com"]
  let domainAddOption = "";
  for (let i = 0; i<domain.length; i++) {
    domainAddOption += `<option>${domain[i]}</option>`;
  }
  email.innerHTML = domainAddOption;
  
  email.addEventListener("change", changeDomain);
  
  //이메일 도메인 선택시 변경

function changeDomain() {
  let selectTxt = email.options[email.selectedIndex].text;
  let emailDomain = document.querySelector("#email-domain");
  if(email.value == "직접입력") {
    emailDomain.value = ""; 
    emailDomain.focus();
  }
  else {
    emailDomain.value = selectTxt;
  }
}

// 시/도 option 구현

let siDo = ["시/도", "서울특별시", "경기도", "인천광역시", "경상남도","전라남도", "강원도"];
let siDoAddOption = "";
for (let i = 0; i<siDo.length; i++) {
  siDoAddOption += `<option value="${siDo[i]}">${siDo[i]}</option>`;
}
let selectSiDo = document.querySelector("#select-si-do");
selectSiDo.innerHTML = siDoAddOption;

//시/군/구 option 구현


selectSiDo.addEventListener("change", selectDistrict);

function selectDistrict() {
  let siGunGo = ["시/군/구"];
  let seoul = ["시/군/구", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "마포구", "서초구", "영등포구", "용산구", "종로구", "중구"];
  let gyeonggiDo = ["시/군/구", "가평군", "고양시 덕양구", "고양시 일산서구", "광명시", "김포시", "부천시", "성남시 분당구", "성남시 수정구", "수원시 팔달구", "시흥시", "안산시 단원구", "여주시", "오산시", "용인시 기흥구", "의왕시", "의정부시", "파주시", "평택시", "포천시", "하남시", "화성시"];
  let incheon = ["시/군/구", "강화군", "계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "옹진군", "중구"];
  let gyeongsangnamDo = ["시/군/구", "거제시", "고성군", "김해시", "밀양시", "진주시", "창녕군", "창원시 마산회원구", "창원시 진해구", "통영시", "하동군", "함안군", "합천군"];
  let gangwonDo = ["시/군/구", "강릉시", "고성군", "동해시", "삼척시", "속초시", "양양군", "영월군", "원주시", "인제군", "철원군", "춘천시", "태백시", "홍천군", "횡성군"];
  let jeollanamDo = ["시/군/구", "강진군", "고흥군", "나주시", "목포시", "무안군", "순천시", "여수시", "영광군", "완도군", "진도군", "해남군", "화순군"];
  let selectSiGunGu = document.querySelector("#select-si-gun-gu");
  let siGunGuOption = "";
  
  if (selectSiDo.value == "시/도") {
    for (let i = 0; i<siGunGo.length; i++) {
      siGunGuOption += `<option>${siGunGo[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  else if (selectSiDo.value == "서울특별시") {
    for (let i = 0; i<seoul.length; i++) {
      siGunGuOption += `<option>${seoul[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  } 
  else if (selectSiDo.value == "경기도") {
    for (let i = 0; i<gyeonggiDo.length; i++) {
      siGunGuOption += `<option>${gyeonggiDo[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  else if (selectSiDo.value == "인천광역시") {
    for (let i = 0; i<incheon.length; i++) {
      siGunGuOption += `<option>${incheon[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  else if (selectSiDo.value == "경상남도") {
    for (let i = 0; i<gyeongsangnamDo.length; i++) {
      siGunGuOption += `<option>${gyeongsangnamDo[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  else if (selectSiDo.value == "전라남도") {
    for (let i = 0; i<jeollanamDo.length; i++) {
      siGunGuOption += `<option>${jeollanamDo[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  else if (selectSiDo.value == "강원도") {
    for (let i = 0; i<gangwonDo.length; i++) {
      siGunGuOption += `<option>${gangwonDo[i]}</option>`;
    }
    selectSiGunGu.innerHTML = siGunGuOption;
  }
  
}




//첨부파일 확장자 체크
let checkFile = document.querySelector("#file-input");
checkFile.addEventListener("change", attachmentSubmit);

function attachmentSubmit() {
  let attachment = document.querySelector('#file-input').value;
  attachment = attachment.slice(attachment.indexOf(".") + 1).toLowerCase();
  
  if (attachment !== "pdf" && attachment !== "docx" && attachment !== "pptx" && attachment !== "xlsx" && attachment !== "jpg" && attachment !== "gif" && attachment !== "png") {
    alert("첨부가 불가능한 파일입니다.\n실행파일 또는 소스파일은 업로드 불가 입니다."); 
  }
  
}

//파일 선택 시 나타내주기

$(document).ready(function(){ 
  let fileTarget = $(".filebox #file-input"); 
  fileTarget.on("change", function(){     // 값이 변경되면 
    if(window.FileReader){ // modern browser 
      var filename = $(this)[0].files[0].name; 
    } 
    else { // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
    } 
    // 추출한 파일명 삽입 
    $(this).siblings(".file-upload-name").val(filename); 
  }); 
});


//유효성 검사

let enrollBtn = document.querySelector(".enroll-btn");
enrollBtn.addEventListener("click", fnValidation);
let frm = document.querySelector("form");

function fnValidation() {
  let personalAgree = document.querySelector("#personal-agree");
  let personalAgree_checked = personalAgree.checked;
  let fosterAgree = document.querySelector("#foster-agree");
  let fosterAgree_checked = fosterAgree.checked;
  let uId = document.querySelector("#uID");
  let uPhone = document.querySelector("#uPhone");
  let uEmail = document.querySelector("#uEmail");
  let emailDomain = document.querySelector("#email-domain");
  let uTitle = document.querySelector("#uTitle");
  let uContent = document.querySelector("#uContent");
  let mailAgree = document.querySelector("#mail-agree");
  let mailAgree_checked = mailAgree.checked;

  if (personalAgree_checked == false) {
    alert("개인정보수집 및 이용에 동의가 필요합니다.");
    personalAgree.focus();
  } else if (fosterAgree_checked == false) {
    alert("개인정보 위탁에 동의가 필요합니다.");
    fosterAgree.focus();
  } else if (uId.value.trim() == "") {
    alert("이름을 입력해주세요.");
    uId.focus();
  } else if (uPhone.value.trim() == "") {
    alert("연락 가능한 전화번호를 입력해주세요.");
    uPhone.focus();
  } else if (uEmail.value.trim() == "") {
    alert("이메일을 입력해주세요.");
    uEmail.focus();
  } else if (emailDomain.value.trim() == "") {
    alert("이메일을 입력해주세요.");
    emailDomain.focus();
  } else if (uTitle.value.trim() == "") {
    alert("제목을 입력해주세요.")
    uTitle.focus();
  } else if (uContent.value.trim() == "") {
    alert("내용을 입력해주세요.")
    uContent.focus();
  } else if (mailAgree_checked == false)  {
    alert("신청·문의사항에 대한 답변은 메일 발송에 따른 동의가 필요합니다.");
    mailAgree.focus();
  } else {
    fnOpenModalLayer();
  }
}

//



let num = document.querySelector("#num");
let cntNum = 3;
function fnCountdown() {
  num.innerHTML = cntNum;
  if (cntNum == 0) frm.submit();
  cntNum--;
  
}

const modalLayerPopup = document.querySelector("#modalLayerPopupBg");
function fnOpenModalLayer() {
  modalLayerPopup.style.display="block";    

  setInterval(fnCountdown, 1000);
}