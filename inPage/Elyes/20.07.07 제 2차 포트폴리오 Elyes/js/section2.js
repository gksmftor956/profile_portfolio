(function($, window, document, undefined){
	var winWS2 = $(window).innerWidth();
	
		$('#section2').css({ width:winWS2 });
		
		function s2ResizeFn(){
			winWS2 = $(window).innerWidth();
			$('#section2').css({ width:winWS2 });
		}
		
		s2ResizeFn();
		setTimeout(s2ResizeFn,100);
		
		$(window).resize(function(){
			s2ResizeFn();
			setTimeout(s2ResizeFn,100);
		});
	
})(jQuery, window, document);
//section2.js