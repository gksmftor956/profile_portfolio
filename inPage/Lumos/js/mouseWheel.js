(function($, window, document, undefined){
	var winH = $(window).innerHeight();
	var winW = $(window).innerWidth();
	var delta;
	var brows;
	var setId=0;


	
		//섹션별 마우스휠 이벤트 each
		setTimeout(resizeFn,10);
		$(window).resize(function(){
			setTimeout(resizeFn,10);
		});


			function resizeFn(){
				winW = $(window).innerWidth();
				winH = $(window).innerHeight();

			if( winW < 1024 || winH < 600 ){ 
				return false;
			}
			else{	
				$('.section').each(function(index){
					$(this).on('mousewheel DOMMouseScroll', function(event){
						

						brows = window.navigator.userAgent.toLowerCase().indexOf('firefox');
						if( brows !==-1 ){
							delta = (event.detail*-1)*40;
						}
						else{
							delta = event.originalEvent.wheelDelta;			
						}


						if( delta<0 ){
							if( index < $('.section').length-1 ){
								if( $(window).scrollTop() < $('#section5').offset().top ){
									$('html, body').stop().animate({ scrollTop:$(this).next().offset().top },500, 'easeInOutSine');
								}
							}
						}
						else if( delta >= 0 ){
							if( index >= 1 ){
								$('html, body').stop().animate({ scrollTop:$(this).prev().offset().top },500, 'easeInOutSine');
							}
						}
						else if( winH > 600 || winW >= 1024 ){
							event.preventDefault();
						}
						
					});
				}); 
			} //if
		}//function


})(jQuery, window, document);
//mouseWheel.js