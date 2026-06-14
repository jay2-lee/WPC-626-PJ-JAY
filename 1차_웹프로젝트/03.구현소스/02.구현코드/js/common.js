// 공통 JS - common.js
 
// 스크롤기능함수 불러오기 ///
import autoScroll from "./auto_scroll.js";
 
// 링크시스템 함수 불러오기 ///
import linksys from "./func/linksys.js";
 
// [1] 상단, 하단영역 대상선정
const topArea = document.querySelector("#top-area");
const bottomArea = document.querySelector("#bottom-area");
 
// 메인과 서브 페이지를 구분하여 스크롤기능함수를
// 실행해야하므로 페이지 이름을 읽어옴
const pagename = location.pathname;
// 실제 페이지 이름만 추출하기
const pagename2 = pagename.split("/").pop().toLowerCase().split(".")[0];
console.log("페이지이름:", pagename2);
 
// [2] 상단, 하단영역 불러오기
// [2-1] 상단영역 불러오기
fetch("./inc/header.html")
  .then((res) => res.text())
  .then((data) => {
    topArea.innerHTML = data;
 
    // 검색 기능 초기화
    initSearch();
 
    // 모바일 메뉴 버튼
    $(".mob-menu-btn").click(function () {
      $(this).toggleClass("on");
      $(".menu-group").toggleClass("on");
    });
 
    // 링크시스템 함수 호출
    linksys();
  });
 
// 검색 기능
function initSearch() {
  const searchBtn     = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose   = document.getElementById('searchClose');
  const searchForm    = document.getElementById('searchForm');
  const searchInput   = document.getElementById('searchInput');
 
  if (searchBtn) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 300);
    });
  }
 
  if (searchClose) {
    searchClose.addEventListener('click', function (e) {
      e.preventDefault();
      searchOverlay.classList.remove('active');
      searchInput.value = '';
    });
  }
 
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
    }
  });
 
  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
      }
    });
  }
 
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        alert('검색어: ' + query + '\n(실제 검색 기능은 서버 연동이 필요합니다)');
      }
    });
  }
}
 
// [2-2] 하단영역 불러오기
fetch("./inc/footer.html")
  .then((res) => res.text())
  .then((data) => {
    bottomArea.innerHTML = data;
 
    // 스크롤 버튼 초기화
    initScrollButtons();
 
    // index 페이지일 때만 자동스크롤 실행
    if (pagename2 === "index") {
      autoScroll();
    }
  });
 
// 스크롤 버튼 기능
function initScrollButtons() {
  const scrollTopBtn  = document.getElementById('scrollTopBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
 
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
 
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function () {
      const currentScroll = window.pageYOffset;
      const windowHeight  = window.innerHeight;
      window.scrollTo({ top: currentScroll + windowHeight, behavior: 'smooth' });
    });
  }
 
  window.addEventListener('scroll', function () {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  });
}