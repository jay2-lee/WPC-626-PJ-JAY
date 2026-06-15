// 이루삼 링크 시스템 JS - linksys.js /////////////
export default () => {
  console.log("링크시스템 로드완료!");
 
  // 현재 페이지 언어 감지 (_en, _ja 파일명으로 판단)
  const pagename = location.pathname.split("/").pop().toLowerCase();
  const isEn = pagename.includes("_en");
  const isJa = pagename.includes("_ja");
  const lang = isEn ? "en" : isJa ? "ja" : "ko";
 
  // 대메뉴 링크 막기
  document.querySelectorAll(".gnb-menu>ul>li>a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
 
  // 로고 클릭 설정
  document.querySelector(".logo a").addEventListener("click", (e) => {
    e.preventDefault();
    location.href = e.currentTarget.getAttribute("href");
  });
 
  // 링크 대상 : .sub-menu a
  const linkMenu = document.querySelectorAll(".sub-menu a");
 
  linkMenu.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const txt = this.textContent.trim();
      console.log("링크메뉴:", txt);
 
      switch (txt) {
        // ── 한국어 ──────────────────────────────
        case "회사개요":              location.href = "about_overview.html"; break;
        case "인사말":                location.href = "about_us.html"; break;
        case "연혁":                  location.href = "history.html"; break;
        case "사업장소개":            location.href = "about_location.html"; break;
        case "PET JBB305(고상 Chip)": location.href = "pet_jbb305.html"; break;
        case "PET JSB194(액상 Chip)": location.href = "pet_jsb194.html"; break;
        case "RECYCLED원료":          location.href = "recycled.html"; break;
        case "항균제":                location.href = "antibacterial.html"; break;
        case "식미개선제_밥맛향상제":  location.href = "taste_enhancer.html"; break;
        case "세탁내구성 향상가공제":  location.href = "washing_durability.html"; break;
        case "포름알데히드 캐쳐제":   location.href = "formaldehyde.html"; break;
        case "소취/항균제(DEOGUARD)": location.href = "deoguard.html"; break;
        case "고객센터":              location.href = "contact.html"; break;
 
        // ── English ─────────────────────────────
        case "Company Overview":         location.href = "about_overview_en.html"; break;
        case "Greeting":                 location.href = "about_us_en.html"; break;
        case "History":                  location.href = "history_en.html"; break;
        case "Location":                 location.href = "about_location_en.html"; break;
        case "PET JBB305(Solid Chip)":   location.href = "pet_jbb305_en.html"; break;
        case "PET JSB194(Liquid Chip)":  location.href = "pet_jsb194_en.html"; break;
        case "RECYCLED Material":        location.href = "recycled_en.html"; break;
        case "Antibacterial Agent":      location.href = "antibacterial_en.html"; break;
        case "Taste Enhancer":           location.href = "taste_enhancer_en.html"; break;
        case "Washing Durability Agent": location.href = "washing_durability_en.html"; break;
        case "Formaldehyde Catcher":     location.href = "formaldehyde_en.html"; break;
        case "Deodorizing/Antibacterial(DEOGUARD)": location.href = "deoguard_en.html"; break;
        case "Contact Us":               location.href = "contact_en.html"; break;
 
        // ── 日本語 ───────────────────────────────
        case "会社概要":                    location.href = "about_overview_ja.html"; break;
        case "ご挨拶":                      location.href = "about_us_ja.html"; break;
        case "沿革":                        location.href = "history_ja.html"; break;
        case "事業所紹介":                  location.href = "about_location_ja.html"; break;
        case "PET JBB305(固相チップ)":      location.href = "pet_jbb305_ja.html"; break;
        case "PET JSB194(液相チップ)":      location.href = "pet_jsb194_ja.html"; break;
        case "リサイクル原料":              location.href = "recycled_ja.html"; break;
        case "抗菌剤":                      location.href = "antibacterial_ja.html"; break;
        case "食味改善剤":                  location.href = "taste_enhancer_ja.html"; break;
        case "洗濯耐久性向上加工剤":        location.href = "washing_durability_ja.html"; break;
        case "ホルムアルデヒドキャッチャー": location.href = "formaldehyde_ja.html"; break;
        case "消臭/抗菌剤(DEOGUARD)":      location.href = "deoguard_ja.html"; break;
        case "お問い合わせ":                location.href = "contact_ja.html"; break;
 
        // ── 언어 공통 (DURASIL) ─────────────────
        case "DURASIL":
          if      (lang === "en") location.href = "durasil_en.html";
          else if (lang === "ja") location.href = "durasil_ja.html";
          else                    location.href = "durasil.html";
          break;
      }
    });
  });
}; ///////////// linksys 함수 /////////////