
document.addEventListener('DOMContentLoaded', function(){

    let slideWrp = document.querySelector('.container');
    let slideUl = document.querySelector('.main-slider');
    let slideEls = document.querySelectorAll('.slide');
    let btnPrev = document.querySelector('.prev');
    let btnNext = document.querySelector('.next');
    let circle = document.querySelector('.circle');

    let slideHeight = 0;
    let currnetIndex = 0;
    let timer = '';
    // let circleHTML = '';


    console.log(slideWrp,slideUl,slideEls,btnPrev,btnNext,circle);

    

    // ************* 슬라이더의 높이값(가장 높은값) 구하기, 그값으로 부모에게 높이값 적용하기*************
    
    function tallHeightSlide(){
        for( i = 0; i < slideEls.length; i++){
            if( slideHeight < slideEls[i].offsetHeight ){
                slideHeight = slideEls[i].offsetHeight;  // 참이면 실행
            }
            console.log(slideHeight);
        }
    // ul. div 부모의 높이값
        slideWrp.style.height = slideHeight + 'px';
        slideUl.style.height = slideHeight + 'px';
        console.log(slideWrp, slideUl);
    }
    tallHeightSlide();


    // ************* 슬라이드 가로로 배열하기 *************
    for( i = 0; i < slideEls.length; i++){
        slideEls[i].style.left = i * 100 + '%';
        
        // circle.span태그 만들어주기
        circle.innerHTML += '<span data-idx="'+i+'">'+(i+1)+'</span>';
        
    }
    let circleBtn = document.querySelectorAll('.circle span');

    // ************* 슬라이드 이동함수 *************
    function  goToSlide(idx){ // idx 보고싶은화면번호
        slideUl.classList.add('animated'); 
        slideUl.style.left = -100 * idx + '%';
        currnetIndex = idx;

         // 모든 circleBtn active 제거, 클릭된 요소에만 active 추가
         for( i = 0; i < circleBtn.length; i++){
            circleBtn[i].classList.remove('active');
        }
        circleBtn[idx].classList.add('active');     
       
    }
    goToSlide(0); //시작하면 0번을보여줘

      //  양쪽 버튼 클릭하면 이벤트,슬라이드 이동하기
    btnPrev.addEventListener('click' , function(e){
        e.preventDefault();

        if(currnetIndex == 0){
            goToSlide(slideEls.length -1);  // 마지막으로가라
        }else{
            goToSlide(currnetIndex - 1);
        }
        

    });
    btnNext.addEventListener('click' , function(e){
        e.preventDefault();

        if(currnetIndex == slideEls.length -1){ //마지막이면 
            goToSlide(0); 
        }else{
            goToSlide(currnetIndex + 1);
        }
        
        
    });


    

    // ************* 자동으로 슬라이드 이동하기 *************
    function autoSlide(){
        timer = setInterval(function(){
            let nextIdx = (currnetIndex + 1) % slideEls.length;

            goToSlide(nextIdx);
            }, 4000);
    } 
    autoSlide();

/*        // 자동슬라이드 멈춤
       function stopSlide(){
           clearInterval(timer);
       }
       // slideWap에 마우스가 들어오면 할일, 나가면 할일
        slideWrp.addEventListener('mouseenter' , function(){
            stopSlide();

        });
        slideWrp.addEventListener('mouseleave' , function(){
            autoSlide();
        });
 */
    // ************* pagecirle로 슬라이드 이동하기 *************
    for( i = 0; i < circleBtn.length; i++){
        circleBtn[i].addEventListener( 'click' , function(e){
        console.log(e.target.innerText); 
            // let circleNum = e.target.getAttribute('data-idx');
            let circleNum = e.target.innerText - 1;
            goToSlide(circleNum);
        });
        
    }    
});

