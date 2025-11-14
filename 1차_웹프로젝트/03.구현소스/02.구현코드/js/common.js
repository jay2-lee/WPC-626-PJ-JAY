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
// fetch() 메서드 사용!
// [2-1] 상단영역 불러오기
fetch("./inc/header.html")
  // 응답객체 처리 -> text() 메서드 호출
  .then((res) => res.text())
  // 불러온 코드 처리
  .then((data) => {
    // data - 불러온 코드
    topArea.innerHTML = data;
    // [2-1] 상단영역 불러오기
fetch("./inc/header.html")
  .then((res) => res.text())
  .then((data) => {
    topArea.innerHTML = data;

    // 여기에 추가 ↓↓↓
    // 검색 기능 초기화
    initSearch();
    // 언어 선택 기능 초기화
    initLanguage();
    
    // 기존 코드...
    $(".mob-menu-btn").click(function () {
      $(this).toggleClass("on");
      $(".menu-group").toggleClass("on");
    });

    linksys();
  });

// 검색 기능
function initSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput.focus(), 300);
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.classList.remove('active');
      searchInput.value = '';
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      searchInput.value = '';
    }
  });

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
      }
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query) {
        alert('검색어: ' + query + '\n(실제 검색 기능은 서버 연동이 필요합니다)');
      }
    });
  }
}

// 언어 선택 기능
function initLanguage() {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn) {
    langBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
  }

  if (langDropdown) {
    const langLinks = langDropdown.querySelectorAll('a');
    langLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        
        langLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        localStorage.setItem('selectedLang', lang);
        alert('언어가 ' + this.textContent + '(으)로 변경되었습니다.');
        
        langDropdown.classList.remove('active');
      });
    });
  }

  document.addEventListener('click', function(e) {
    if (langDropdown && !e.target.closest('.lang-selector')) {
      langDropdown.classList.remove('active');
    }
  });

  const savedLang = localStorage.getItem('selectedLang') || 'ko';
  const langLinks = document.querySelectorAll('.lang-dropdown a');
  langLinks.forEach(link => {
    if (link.getAttribute('data-lang') === savedLang) {
      link.classList.add('active');
    }
  });
}

    // 상단 메뉴 클릭시 작동기능 //////
    $(".mob-menu-btn").click(function () {
      $(this).toggleClass("on");
      $(".menu-group").toggleClass("on");
    });

    // 링크시스템 함수 호출!
    linksys();
  });

// [2-2] 하단영역 불러오기
fetch("./inc/footer.html")
  // 응답객체 처리 -> text() 메서드 호출
  .then((res) => res.text())
  // 불러온 코드 처리
  .then((data) => {
    bottomArea.innerHTML = data;
    // [2-2] 하단영역 불러오기
fetch("./inc/footer.html")
  .then((res) => res.text())
  .then((data) => {
    bottomArea.innerHTML = data;
    
    // 여기에 추가 ↓↓↓
    // 스크롤 버튼 초기화
    initScrollButtons();
    
    if(pagename2 === "index") {
      autoScroll();
    }
  });

// 스크롤 버튼 기능
function initScrollButtons() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
  
  // 위로 가기 버튼
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // 아래로 가기 버튼
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function() {
      const currentScroll = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      window.scrollTo({
        top: currentScroll + windowHeight,
        behavior: 'smooth'
      });
    });
  }
  
  // 스크롤 시 위로가기 버튼 표시/숨김
  window.addEventListener('scroll', function() {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  });
}
    // 하단까지 모두 불러온후 index페이지일때만!
    // 자동스크롤 기능함수 호출!
    if(pagename2 === "index") {
      autoScroll();
    }
  });
