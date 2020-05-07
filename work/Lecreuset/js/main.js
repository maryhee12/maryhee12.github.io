 $(function(){
	 
	    $('p.menuBtn').click(function(e){
     $('header>div#navBack').css({display:'block'});
     $('p.close').css({display:'block'});
   });
   $('p.close').click(function(e){
     $('header>div#navBack').css({display:'none'});
     $('p.close').css({display:'none'});
   });

	 
	 
	 
	 
	 
	 
		$('div#headerBack p.bar').click(function(e){
			$('div#mobilebar').show();
			$('div#mobilebar>nav').animate({left:'0'},'fast');
			});
		
		$('div#mobilebar p.close').click(function(){
			$('div#mobilebar').hide();
			$('div#mobilebar>nav').animate({left:'-300'},'fast');
			});
		});
		
		