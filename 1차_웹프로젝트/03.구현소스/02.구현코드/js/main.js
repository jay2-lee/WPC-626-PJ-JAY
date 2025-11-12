// 가로방향 배너 슬라이드
// 제이쿼리 버전 - main.js

// 메인 슬라이더 불러오기
import mainSlider from "./func/main_slider.js";

// 메인 슬라이더 실행!
mainSlider();


// Product 구역 클릭시 /////////

// 변경대상: .icon-box
const $iconBox = $('.icon-box ul');

$('.btn-grp button').click(function(){
    if($(this).is('.btn-up')){
        console.log('위');
        $iconBox.prepend($iconBox.find('li').last());
    } else {
        console.log('아래');
        $iconBox.append($iconBox.find('li').first());
    }

}); ////////// click //////////