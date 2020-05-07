menuPc();

function menuPc(){
    $('.menu').on({
        'mouseenter focusin':function(){
        $('.gnb_sub_bg').addClass("on").stop().animate({"height":"254px"},500);
        //서브배경on을 주면 배경 나오기
        $(".menu .gnb").stop().animate({"heigh":"315px"},500);
        //ul 높이값
            $(".menu .gnb > li ").on("mouseenter focusin" , function(){
                $(".menu .gnb li ").not(this).removeClass("on");
                $(this).addClass("on");
                var gnbImg = $(".gnb_sub_bg > span");
                var gnbLi1 = $(".gnb .menu01");
                var gnbLi2 = $(".gnb .menu02");
                var gnbLi3 = $(".gnb .menu03");
                var gnbLi4 = $(".gnb .menu04");
                var gnbLi5 = $(".gnb .menu05");
               
       console.log(gnbImg);
                if(gnbLi1.hasClass('on')){	  
                    gnbImg.removeClass().addClass("gnb_img").addClass("gnb_img01");
                    
                }else if(gnbLi2.hasClass('on')){
                    gnbImg.removeClass().addClass("gnb_img").addClass("gnb_img02");
                    
                }else if(gnbLi3.hasClass('on')){
                    gnbImg.removeClass().addClass("gnb_img").addClass("gnb_img03");
                    
                }else if(gnbLi4.hasClass('on')){
                    gnbImg.removeClass().addClass("gnb_img").addClass("gnb_img04");
                    
                }else if(gnbLi5.hasClass('on')){
                    gnbImg.removeClass().addClass("gnb_img").addClass("gnb_img05");    	  
                }
        });
    },'mouseleave focusout':function(){
        $(".menu .gnb").stop().animate({"height":"63px"},500);
        $(".menu .gnb li").removeClass("on");
        $(".gnb_sub_bg").removeClass("on").stop().animate({"height":"0"},600);
        $(".gnb_sub_bg > span").removeClass().addClass(".gnb_img");
      }

    });
}
