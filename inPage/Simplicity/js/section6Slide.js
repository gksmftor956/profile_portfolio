(function($, window, document, undefined){
	
		var cnt = setId = setId2 = t = 0;
		var winW = $(window).innerWidth();
		var n = 5;
		var	slideW = winW / n;
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:slideW*15, marginLeft:-(slideW*5) });
			
			
		function s6ResizeFn(){
			winW = $(window).innerWidth();
			if( winW >= 1200 ){
				n=5;
			}
			else if( winW >= 1024 ){
				n=4;
			}
			else if( winW >= 800 ){
				n=3;
			}
			else if( winW >= 500 ){
				n=2;
			}
			else {
				n=1;
			}
			slideW = winW / n;
			$('.slide').css({ width:slideW });
			$('.slide-wrap').css({ width:slideW*15, marginLeft:-(slideW*5) });
			
			//메인슬라이드 left:반응형결정
			$('.slide-wrap').stop().animate({left:-(slideW*cnt)},0);
			// mainSlideFn();
		}
		
		setTimeout(s6ResizeFn,100);
		
		$(window).resize(function(){
			s6ResizeFn();
		});
		
		
		//메인 슬라이드
		function mainSlideFn(){
			$('.slide-wrap').stop().animate({left:-slideW*cnt},600,	function(){
				if( cnt>4 ){ cnt=0; }
				if( cnt<0 ){ cnt=4; }
				$('.slide-wrap').stop().animate({left:-slideW*cnt},0);
			});
		}
		
		
		//다음 카운트 함수
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		//이전 카운트 함수
		function prevCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		
		//다음 버튼 클릭 이벤트
		$('.nextBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();
					pauseFn();
				}
			}
		});
		//이전 버튼 클릭 이벤트
		$('.prevBtn').on({
			click:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();
					pauseFn();
				}
			}
		});
		
		//터치이벤트
		$('.slide-container').swipe({
			swipeLeft:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					nextCountFn();
					pauseFn();
				}
			},
			swipeRight:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					prevCountFn();
					pauseFn();
				}
			}
		});
		
		//오토 타이머 함수
		function autoTimerFn(){
			setId = setInterval(nextCountFn,3000);
		}
		autoTimerFn();
		
		//일시정지 함수
		function pauseFn(){
			t=0;
			clearInterval(setId2);
			clearInterval(setId);
			
			setId2 = setInterval(function(){
				t++;
				if( t >= 5 ){
					t=0;
					nextCountFn();
					autoTimerFn();
					clearInterval(setId2);
				}
			},1000);
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
})(jQuery, window, document);
//section6Slide.js