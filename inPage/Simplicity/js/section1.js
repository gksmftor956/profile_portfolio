(function($, window, document, undefined){
	var winH = $(window).innerHeight();
	var titH = $('#section1 .title').innerHeight();
	var titT = (winH - titH)/2;
		$('#section1 .container').css({ height:winH });
		$('#section1 .title').css({ top:titT });
		
		// if( window.orientation == 90 || window.orientation == -90 ){	//가로형 : landscape
			// $('#section1 .container').css({backgroundSize:'100% auto'});
		// }
		// else{	//세로형 : portrait
			// $('#section1 .container').css({backgroundSize:'auto 100%'});
		// }
		
		function s1ResizeFn(){
			winH = $(window).innerHeight();
			titH = $('#section1 .title').innerHeight();
			titT = (winH - titH)/2;
			$('#section1 .container').css({ height:winH });
			$('#section1 .title').css({ top:titT });
			// if( window.orientation == 90 || window.orientation == -90 ){	//가로형 : landscape
				// $('#section1 .container').css({backgroundSize:'100% auto'});
			// }
			// else{	//세로형 : portrait
				// $('#section1 .container').css({ backgroundSize:'auto 100%' });
				// $('#section1 .container').css({ backgroundSize:'auto ' + winH });
			// }
		}
		setTimeout(s1ResizeFn,100);
		
		$(window).resize(function(){
			s1ResizeFn();
		});
		
		
		
	
	
	
	
	
	
	
})(jQuery, window, document);
//section1.js