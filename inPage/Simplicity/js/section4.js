(function($, window, document, undefined){
	var s4conH = $('#section4 .container').innerHeight();
	var s4titH = $('#section4 .title').innerHeight();
	var s4titT = (s4conH-s4titH)/2;
		// $('#section4 .container').css({height:s4conH});
		$('#section4 .title').css({top:s4titT});
		
		function s4ResizeFn(){
			s4winH = $('#section4 .container').innerHeight();
			s4titH = $('#section4 .title') .innerHeight();
			s4titT = (s4winH-s4titH)/2;
			// $('#section4 .container').css({height:s4winH});
			$('#section4 .title').css({top:s4titT});
		}
		
		setTimeout(s4ResizeFn,100);
		
		$(window).resize(function(){
			s4ResizeFn();
		});
	
	
	
})(jQuery, window, document);
//section4.js