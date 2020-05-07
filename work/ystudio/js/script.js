
'use strict';  // 함수를 실행한다

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();   // a링크 차단하겠다
});

//gnb 메뉴
$(function(){
    $('header .menuOpen').on('click', function(){
        $('.gnb').addClass('on');
    });
    $('.gnb > .close, section').on('click', function(){
        $('.gnb').removeClass('on');
    });
});

//fixheader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

// 윈도우 창 조절 이벤트
$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
    if(scrollTop > 150 ){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
}


// 스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:false,       //모바일은 적용안함
        once:false          // 한번만적용할때는 true
    });
});

// top_arrow 버튼 부드럽게
$(function(){
    $('.top_arrow').on('click', function(){
        $('html,body').animate({ scrollTop : 0 }, 500 );
    });
});


// visual 이미지 슬라이드

$(function(){
    $(".visual .slide").slick({
        arrows: true,  //화살표
        dots: false, //인디케이프 화면
        fade: true, //페이드인효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000,  //자동재생
        pauseOnHover: false,
        PauseOnFocus: false
    });
});