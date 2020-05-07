//javascript
function nowTimer(){
  timer=new Date();
    var userY= timer. getFullYear();
    var userMM= timer.getMonth()+1;
    var userD= timer.getDate();
    var userT=  timer.getHours();
    var userM= timer.getMinutes();
    var userS= timer.getSeconds();
   
 //날짜  
$('dd.userY>span.Timer').text(userY);
$('dd.userMM>span.Timer').text(userMM);
$('dd.userD>span.Timer').text(userD);


//시간
//$('dd.userT>span.Timer').text(userT);
//$('dd.userM>span.Timer').text(userM);/
//$('dd.userS>span.Timer').text(userS);
   if(userT<10){$('dd.userT>span.Timer').text('0'+userT);}
     else{$('dd.userT>span.Timer').text(userT);}
   if(userM<10){$('dd.userM>span.Timer').text('0'+userM);}
     else{$('dd.userM>span.Timer').text(userM);}
   if(userS<10){$('dd.userS>span.Timer').text('0'+userS);}
     else{$('dd.userS>span.Timer').text(userS);}	 
	 
	 
}

//시간을 맞추는 배경
function nowBack(){
 	now=new Date();
	hr=now.getHours();
	
	if(hr>=5 && hr<11){
		$('footer>div#back01').css('backgroundImage','url(img/morning.jpg)');
	
	}
	if(hr>=11 && hr<17){
		$('footer>div#back01').css('backgroundImage','url(img/afternoon.jpg)');
//$('section').attr('class', '');
//$('section').addClass('afternoon');
//$('section').attr('class','afternoon');	
	}
	if(hr>=17 && hr<20){
		$('footer>div#back01').css('backgroundImage','url(img/evening.jpg)');
	
	}
	if(hr>=20){
		$('footer>div#back01').css('backgroundImage','url(img/night.jpg)');
	
	}
	if(hr<5){
		$('footer>div#back01').css('backgroundImage','url(img/night.jpg)');
	
	}
}
	
function backBtn(){
	     $('aside>ul>li>a:not(aside>ul>li>a.now)').on('click', function(){
		    var btn= $(this). attr('class');
		 // $('p#test').text(btn);
		 // $('footer>div#back01').css('background-image', 'url(img/'+btn+'.jpg)');
		
		  $('footer').prepend('<div id="back02"></div>');    //div생성 내가 클릭한 a의 class백의 이미지
		  $('div#back02').css({backgroundImage:'url(img/'+btn+'.jpg)', 
											backgroundRepeat:'no-repeat',
											backgroundSize:'cover'});
		 $('footer>div#back01').fadeOut('fast', function(){
			 $(this).remove();       //기존의 div 없애기
			 $('div#back02').attr('id', 'back01');   //id 이름 바꾸기
			 
		   });      
$('section').attr('class', '');			   //last02
$('section').addClass(btn);		       //last01                                                   
		 return false;
		 
	 });
$('aside>ul>li>a.now').on('click', function(){
	nowBack();
	
});
		
}	
	
	
	
	
	
