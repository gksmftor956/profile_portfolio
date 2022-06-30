(function($, window, document, undefined){
	var winWS3 = $(window).innerWidth();
	var wrapWS3 = (95.5+'%');
		$('#section3').css({width:winWS3});
		if( winWS3 < 1200 ){
			$('.section3-wrap').css({width:wrapWS3});
		}
		
		
		function s3ResizeFn(){
			winWS3 = $(window).innerWidth();
			wrapWS3 = (95.5+'%');
			$('#section3').css({width:winWS3});
			if( winWS3 < 1200 ){
				$('.section3-wrap').css({width:wrapWS3});
			}
			
		}
		
		s3ResizeFn();
		setTimeout(s3ResizeFn,100);
		
		$(window).resize(function(){
			s3ResizeFn();
			setTimeout(s3ResizeFn,100);			
		});
	
})(jQuery, window, document);
//section3.js