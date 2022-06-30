(function($, window, document, underline){
	var s5winW = $(window).innerWidth();
	var s5conRate = 0.63058329;
	var s5conRate2 = 0.833333333;
	var s5conW = s5winW*s5conRate;
	var s5conW2 = s5winW*s5conRate2;
	var liW = s5conW*0.308333333;
	var liH = s5conW*0.2375;
	var fontS1 = liW*0.072972973;
	var fontS2 = liW*0.043243243;
	
	
		$('#section5').css({ width:s5winW });
		
		if( s5winW > 1200 ){
			$('#section5 .container').css({ width:s5conW });
			$('#section5 .moreViewBtn-wrap').css({ width:s5conW });
		}
		else if( s5winW <= 1200 ){
			$('#section5 .container').css({ width:s5conW2 });
			$('#section5 .moreViewBtn-wrap').css({ width:s5conW2 });
		}
		
		if( s5winW > 1200 ){
			$('#section5 .container .content ul li').css({ width:liW, height:liH });
			$('.txt-box h3').css({ fontSize:fontS1+'px' });
			$('.txt-box h3 span').css({ fontSize:fontS2+'px' });			
		}

		
		function s5ResizeFn(){
			s5winW = $(window).innerWidth();
			s5conRate = 0.63058329;
			s5conRate2 = 0.833333333;
			s5conW = s5winW*s5conRate;
			s5conW2 = s5winW*s5conRate2;
			liW = s5conW*0.308333333;
			liH = s5conW*0.2375;
			fontS1 = liW*0.072972973;
			fontS2 = liW*0.043243243;			
			
			$('#section5').css({ width:s5winW });
			
			if( s5winW > 1200 ){
				$('#section5 .container').css({ width:s5conW });
				$('#section5 .moreViewBtn-wrap').css({ width:s5conW });
			}
			else if( s5winW <= 1200 ){
				$('#section5 .container').css({ width:s5conW2 });
				$('#section5 .moreViewBtn-wrap').css({ width:s5conW2 });
			}
			
			if( s5winW > 1200 ){
				$('#section5 .container .content ul li').css({ width:liW, height:liH  });	//, height:liH
				$('.txt-box h3').css({ fontSize:fontS1+'px' });
				$('.txt-box h3 span').css({ fontSize:fontS2+'px' });					
			}
		
			
		}
		
		s5ResizeFn();
		setTimeout(s5ResizeFn,100);
		
		$(window).resize(function(){
			s5ResizeFn();
			setTimeout(s5ResizeFn,100);			
		});
	
})(jQuery, window, document);
//section5.js