// 공통 JS - common_en.js (English)

import autoScroll from "./auto_scroll.js";
import linksys from "./func/linksys.js";

const topArea    = document.querySelector("#top-area");
const bottomArea = document.querySelector("#bottom-area");

const pagename  = location.pathname;
const pagename2 = pagename.split("/").pop().toLowerCase().split(".")[0];
console.log("pagename:", pagename2);

// 상단 영역 불러오기
fetch("./inc/header_en.html")
  .then((res) => res.text())
  .then((data) => {
    topArea.innerHTML = data;
    initSearch();
    initLang();
    $(".mob-menu-btn").click(function () {
      $(this).toggleClass("on");
      $(".menu-group").toggleClass("on");
    });
    linksys();
  });

// 언어 전환 기능
function initLang() {
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (!langBtn || !langDropdown) return;

  langBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  langDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      langDropdown.classList.remove('active');

      // 현재 페이지의 베이스 이름 추출 (_en, _ja 제거)
      const base = pagename2.replace(/_en$/, '').replace(/_ja$/, '');

      if      (lang === 'ko') location.href = base + '.html';
      else if (lang === 'en') location.href = base + '_en.html';
      else if (lang === 'ja') location.href = base + '_ja.html';
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.lang-selector')) {
      langDropdown.classList.remove('active');
    }
  });
}

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
      if (query) alert('Search: ' + query);
    });
  }
}

// 하단 영역 불러오기
fetch("./inc/footer_en.html")
  .then((res) => res.text())
  .then((data) => {
    bottomArea.innerHTML = data;
    initScrollButtons();
    const base = pagename2.replace(/_en$/, '').replace(/_ja$/, '');
    if (base === "index") autoScroll();
  });

// 스크롤 버튼
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
      window.scrollTo({ top: window.pageYOffset + window.innerHeight, behavior: 'smooth' });
    });
  }
  window.addEventListener('scroll', function () {
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('show', window.pageYOffset > 300);
    }
  });
}
