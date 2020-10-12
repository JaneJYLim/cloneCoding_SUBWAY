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
    frm.submit();
  }
}

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



//이메일 도메인 선택시 변경
email = document.querySelector("#email");
email.addEventListener("change", changeDomain);

function changeDomain() {
  let selectTxt = email.options[email.selectedIndex].text;
  document.querySelector("#email-domain").value = selectTxt;
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