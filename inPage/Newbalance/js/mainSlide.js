//mainSlide.js
$(function(){
	
	var cnt = setId = setId2 = c =  0;
	
		//1. 메인 슬라이드 함수
		function mainSlideFn(){
			$('.main-slide-wrap').stop().animate({left:-1903*cnt},600,	function(){
				if( cnt>4 ){
					cnt=0;
				}
				if( cnt<0 ){
					cnt=4;
				}
				$('.main-slide-wrap').stop().animate({left:-1903*cnt},0);
			});
			//4-2. 페이지버튼 이벤트 함수 조건문
			if( cnt>4 ){
				pageBtnEventFn(0);
			}
			else if( cnt<0 ){
				pageBtnEventFn(4);
			}
			else{
				pageBtnEventFn(cnt);
			}
		}
		
		//2. 다음, 이전 슬라이드 카운트 함수
		function nextSlideCountFn(){
			cnt++;
			mainSlideFn();
		}
		function prevSlideCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		//3. 다음, 이전 슬라이드 버튼 클릭 이벤트
		$('.main-slide-nextBtn').on({
			click:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				pauseFn();
			}
		});
		$('.main-slide-prevBtn').on({
			click:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				pauseFn();
			}
		});
		
		//4-1. 페이지버튼 이벤트 함수
		function pageBtnEventFn(z){
			$('.main-slide-pageBtn').removeClass('addPageBtn');
			$('.main-slide-pageBtn').eq(z).addClass('addPageBtn');
		}
		
		//5. 페이지네이션 객체 배열
		$('.main-slide-pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					cnt=index;
					mainSlideFn();
					pauseFn();
				}
			});
		});
		
		//6. 자동 타이머 함수
		function autoSlideTimerFn(){
			setId = setInterval(nextSlideCountFn,3000);
		}
		autoSlideTimerFn();
		
		//7. 터치 이벤트
		$('.main-slide-container').swipe({
			swipeLeft:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					nextSlideCountFn();
				}
				pauseFn();
			},
			swipeRight:	function(){
				if( !$('.main-slide-wrap').is(':animated') ){
					prevSlideCountFn();
				}
				pauseFn();
			}
		});
		
		//8. 일시정지 함수
		function pauseFn(){
			clearInterval(setId);
			c=0;
			clearInterval(setId2);
			
			setId2 = setInterval(function(){
				c++;
				if( c>=7 ){
					nextSlideCountFn();
					autoSlideTimerFn();
					c=0;
					clearInterval(setId2);
				}
			},1000);
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});