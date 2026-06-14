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
    $(".mob-menu-btn").click(function () {
      $(this).toggleClass("on");
      $(".menu-group").toggleClass("on");
    });
    linksys();
  });

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