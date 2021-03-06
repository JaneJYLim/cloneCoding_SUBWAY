//지도API 시작

//지도 생성

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

const COORDS = 'coords';

// function getArea(lat, lng) {

// }

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  // getArea(latitude, longitude);
}

function handleGeoError(){
  console.log('error');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

//위치 받아오기

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
    //getArea
  }
}

loadCoords();












//지도API 끝

// 시/도 option 구현

let siDo = ["시/도", "서울특별시", "경기도", "인천광역시", "경상남도","전라남도", "강원도"];
let siDoAddOption = "";
for (let i = 0; i<siDo.length; i++) {
  siDoAddOption += `<option value="${siDo[i]}">${siDo[i]}</option>`;
}
let selectSiDo = document.querySelector("#province");
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
  let selectSiGunGu = document.querySelector("#city");
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


//table NO에 숫자 대입

let num = document.querySelectorAll("table .num");
let initNum = 423

for (let i = 0; i < num.length; i++) {
  let numTxt = initNum - i;
  num[i].innerHTML = numTxt;
}

//preventDefault(); 적용
$(".pagenation a").click(function(e) {
  e.preventDefault();
})
