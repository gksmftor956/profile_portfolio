$(function(){
	
	//1. goTop-wrap 스크롤링 이벤트
	// scrollTop:30px이상이면 fadeIn(1000)
	// scrollTop:30px이하면 fadeOut(1000)
	$(window).scroll(function(){
		if( $(window).scrollTop()>=30 ){
			$('.goTop-wrap').stop().fadeIn(1000);
		}
		else{
			$('.goTop-wrap').stop().fadeOut(1000);
		}
	});
	
	//2. goTopBtn 클릭 이벤트
	$('.goTopBtn').on({
		click:	function(event){
			event.preventDefault();
			
			// $('html,body').stop().animate({scrollTop:0},1000,'easeInOutExpo');
			$('html,body').stop().animate({scrollTop:$('#wrap').offset().top},1000,'easeInOutExpo');
		}
	});
	
});
//goTop.js