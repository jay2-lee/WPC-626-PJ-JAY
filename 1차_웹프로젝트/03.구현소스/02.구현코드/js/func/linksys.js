// 이루삼 링크 시스템 JS - linksys.js /////////////
export default () => {
  console.log("링크시스템 로드완료!");

  // 대메뉴 링크 막기 /////
  document.querySelectorAll(".gnb-menu>ul>li>a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  // 로고 클릭 설정
  document.querySelector(".logo a").addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "index.html";
  }); ////////// click //////////

  // 링크 대상 : .sub-menu a
  const linkMenu = document.querySelectorAll(".sub-menu a");

  // 링크 기능 설정하기
  linkMenu.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const txt = this.textContent;
      console.log("링크메뉴:", txt);

      // switch문으로 링크 설정하기 ///
      switch (txt) {
        case "회사개요":
          location.href = "about_overview.html";
          break;
        case "인사말":
          location.href = "about_us.html";
          break;
        case "연혁":
          location.href = "history.html";
          break;
        case "사업장소개":
          location.href = "about_location.html";
          break;
        case "PET JBB305(고상 Chip)":
          location.href = "pet_jbb305.html";
          break;
        case "PET JSB194(액상 Chip)":
          location.href = "pet_jsb194.html";
          break;
        case "RECYCLED원료":
          location.href = "recycled.html";
          break;
        case "항균제":
          location.href = "antibacterial.html";
          break;
        case "DURASIL":
          location.href = "durasil.html";
          break;
        case "식미개선제_밥맛향상제":
          location.href = "taste_enhancer.html";
          break;
        case "세탁내구성 향상가공제":
          location.href = "washing_durability.html";
          break;
        case "포름알데히드 캐쳐제":
          location.href = "formaldehyde.html";
          break;
        case "ERS TEX":
          location.href = "ers_tex.html";
          break;
        case "고객센터":
          location.href = "contact.html";
          break;
      }
    });
  });
}; ///////////// linksys 함수 /////////////