//javascript

//타이머
function nowTimer(){

 timer=new Date();
	 userY=timer.getFullYear();
	 userMM=timer.getMonth()+1;
	 userD=timer.getDate();
	 userT=timer.getHours();
	 userM=timer.getMinutes();
	 userS=timer.getSeconds();

	 //날짜
	$('dd.userY>span.Timer').text(userY);
	$('dd.userMM>span.Timer').text(userMM);
	$('dd.userD>span.Timer').text(userD);
	//시간
	if(userT<10){$('dd.userT>span.Timer').text('0'+userT);}
		else{$('dd.userT>span.Timer').text(userT);}
	if(userM<10){$('dd.userM>span.Timer').text('0'+userM);}
		else{$('dd.userM>span.Timer').text(userM);}
	if(userS<10){$('dd.userS>span.Timer').text('0'+userS);}
		else{$('dd.userS>span.Timer').text(userS);}

}
//시간에 맞추는 배경
function nowBack(){
	now=new Date();
	hr=now.getHours();

	if(hr>=5 && hr<11){
		$('footer>div#back01').css('background-image','url(images/Chapelier.png)');
        }
	if(hr>=11 && hr<17){
		$('footer>div#back01').css('background-image','url(images/alice.png)');
	//$('section').attr('class','');
	//$('section').addClass('red');		
	//$('section').attr('class','afternoon');
	}
	if(hr>=17 && hr<20){
		$('footer>div#back01').css('background-image','url(images/main.png)');
	   }
	if(hr>=20){
		$('footer>div#back01').css('background-image','url(images/red.png)');
	}
	if(hr<5){
		$('footer>div#back01').css('background-image','url(images/white.png)');
	}
}
function nowBtn(){
	$('ul a:not(ul a.main)').on('click',function(){
		var btn=$(this).attr('class');
	//	$('footer>div#back01').css('background-image','url(img/'+btn+'.png)');
$('footer').prepend('<div id="back02"></div>');
$('div#back02').css({backgroundImage:'url(images/'+btn+'.png)',
										backgroundRepeat:'no-repeat',
										backgroundSize:'100%'});
$('footer>div#back01').fadeOut('fast',function(){
		$(this).remove();
		$('div#back02').attr('id','back01');	})	;
		
$('section').attr('class','');
$('section').addClass(btn);		
		return false;
	});
	
	$('ul a.main').on('click',function(){
	nowBack();			
	});		
	
}
