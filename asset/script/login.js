const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", fnLogin);

function fnLogin() {
  let input_email = document.querySelector("#input-email");
  let email = document.querySelector("#email");
  let email_value = email.value;

  let input_pw = document.querySelector("#input-pw");
  let pw = document.querySelector("#pw");
  let pw_value = pw.value;
  let frm = document.querySelector("form");

  if (email_value.trim() == "") {
    alert("아이디를 입력해주세요");
    email.focus();
    email.value = "";
    input_email.classList.add("focus-border");
    input_pw.classList.remove("focus-border");
  }
  else if (pw_value.trim() == "") {
    alert("비밀번호를 입력해주세요");
    pw.focus();
    pw.value = "";
    input_email.classList.remove("focus-border");
    input_pw.classList.add("focus-border");
  }
  else {
    frm.submit();
  }

}