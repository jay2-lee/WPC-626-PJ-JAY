// 공통 JS - common.js

// 스크롤기능함수 불러오기 ///
import autoScroll from "./auto_scroll.js";

// [1] 상단, 하단영역 대상선정
const topArea = document.querySelector('#top-area');
const bottomArea = document.querySelector('#bottom-area');

// 메인과 서브 페이지를 구분하여 스크롤기능함수를 
// 실행해야하므로 페이지 이름을 읽어옴
const pagename = location.pathname;
// 실제 페이지 이름만 추출하기
const pagename2 = pagename.split("/").pop().toLowerCase().split(".")[0];
console.log("페이지이름:", pagename2);

// [2] 상단, 하단영역 불러오기
// fetch() 메서드 사용!
// [2-1] 상단영역 불러오기
fetch('./inc/header.html')
// 응답객체 처리 -> text() 메서드 호출
.then(res=>res.text())
// 불러온 코드 처리
.then(data=>{ // data - 불러온 코드
    topArea.innerHTML = data;
});

// [2-2] 하단영역 불러오기
fetch('./inc/footer.html')
// 응답객체 처리 -> text() 메서드 호출
.then(res=>res.text())
// 불러온 코드 처리
.then(data=>{
    bottomArea.innerHTML = data;
    // 하단까지 모두 불러온후
    // 자동스크롤 기능함수 호출!
    autoScroll();
});