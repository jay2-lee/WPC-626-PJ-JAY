// 공통 JS - common.js

import autoScroll from "./auto_scroll.js";
import linksys from "./func/linksys.js";

const topArea = document.querySelector("#top-area");
const bottomArea = document.querySelector("#bottom-area");

const pagename = location.pathname;
const pagename2 = pagename.split("/").pop().toLowerCase().split(".")[0];
console.log("페이지이름:", pagename2);

fetch("./inc/header.html")
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

// 언어 선택 기능
function initLang() {
  const langBtn      = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (!langBtn || !langDropdown) {
    console.log("langBtn 또는 langDropdown 없음!");
    return;
  }
  console.log("langBtn 찾음!");

  langBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("langBtn 클릭됨!");
    langDropdown.classList.toggle('active');
  });

  langDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      console.log("언어 선택:", lang);
      langDropdown.classList.remove('active');

      const currentUrl = encodeURIComponent(location.href);
      if (lang === 'ko') {
        location.href = location.href;
      } else if (lang === 'en') {
        location.href = 'https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=' + currentUrl;
      } else if (lang === 'ja') {
        location.href = 'https://translate.google.com/translate?hl=ja&sl=ko&tl=ja&u=' + currentUrl;
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.lang-selector')) {
      langDropdown.classList.remove('active');
    }
  });
}

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

fetch("./inc/footer.html")
  .then((res) => res.text())
  .then((data) => {
    bottomArea.innerHTML = data;
    initScrollButtons();
    if (pagename2 === "index") {
      autoScroll();
    }
  });

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