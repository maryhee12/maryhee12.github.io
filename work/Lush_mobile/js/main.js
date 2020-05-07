 $(function(){
		$('p.ok').click(function(e){
			$('div#navBack').show();
			$('nav').animate({left:'0'},'fast');
			});
		
		$('p.close').click(function(){
			$('div#navBack').hide();
			$('nav').animate({left:'-280'},'fast');
			});
		});
		
		