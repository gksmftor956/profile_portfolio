(function($, window, document, undefined){
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();

	var cnt = t = setId = setId2 = z = index = 0;
	var wheelDelta;
	
	
		//슬라이드 섹션
		//섹션1 : 슬라이드 속해있는 섹션
		$('#section1').on('mousewheel DOMMouseScroll', function(e){
			e.preventDefault();
			if( e.detail ){	//firefox
				wheelDelta = e.detail*-1;
			}
			else{
				wheelDelta = e.originalEvent.wheelDelta;
			}
			
			if( wheelDelta<0 ){	//마우스 휠 아래로 다음 슬라이드 카운트
				if( !$('.sec1-slide').is(':animated') ){
					pauseFn();
					nextSlideCountFn();
					if( cnt==0 ){
						$('html, body').stop().animate({ scrollTop: $('#section2').offset().top },600);
					}
				}
			}
			else{	//마우스 휠 위로  이전 슬라이드 카운트
				if( !$('.sec1-slide').is(':animated') ){
					pauseFn();
					prevSlideCountFn();
				}
			}
		});
	
	
	
	
		$('#section1, .sec1-slide-wrap, .sec1-slide').css({ width:winW, height:winH });
		$('.sec1-slide>div').css({ height:winH });
		$('#section2').css({ marginTop:winH });


		
		function s1ResizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();


			$('#section1, .sec1-slide-wrap, .sec1-slide').css({ width:winW, height:winH });
			$('.sec1-slide>div').css({ height:winH });
			$('#section2').css({ marginTop:winH });

		}
		s1ResizeFn();
		setTimeout(s1ResizeFn,100);
		
		$(window).resize(function(){
			s1ResizeFn();
			setTimeout(s1ResizeFn,100);
		});
		
		//아래 화살표 누르면 다음 섹션으로 이동
		$('.arrowBtn').on({
			click:	function(event){
				event.preventDefault();
				$('html, body').stop().animate({ scrollTop:$('#section2').offset().top },1000);
			}
		});
		
		
		//페이지버튼 마우스엔터시 왼쪽에서 오른쪽으로 캡 덮기
			$('.pageBtn').on({
				mouseenter:	function(){
					$(this).prev().stop().animate({width:100+'%'},300);
				},
				mouseleave:	function(){
					$(this).prev().stop().animate({width:0+'%'},300);
				}
			});

			
		//다음 슬라이드 메인 함수
		function nextMainSlideFn(){
			$('.sec1-slide').css({zIndex:1}).stop().animate({opacity:0},0);
			$('.sec1-slide').eq(cnt==0?2:cnt-1).css({zIndex:2}).stop().animate({opacity:1},0);
			$('.sec1-slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},700);
			pageBtnEventFn();
			
		}
		//이전 슬라이드 메인 함수
		function prevMainSlideFn(){
			$('.sec1-slide').css({zIndex:1}).stop().animate({opacity:0},0);
			$('.sec1-slide').eq(cnt==2?0:cnt+1).css({zIndex:2}).stop().animate({opacity:1},0);
			$('.sec1-slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},700);
			pageBtnEventFn();
		}
		
		//다음 슬라이드 카운트 함수
		function nextSlideCountFn(){
			cnt++;
			if( cnt>2 ){
				cnt=0;
			}
			nextMainSlideFn();
		}
		//이전 슬라이드 카운트 함수
		function prevSlideCountFn(){
			cnt--;
			if( cnt<0 ){
				cnt=2;
			}
			prevMainSlideFn();
		}
		
		//자동 타이머 함수
		function autoTimerFn(){
			setId = setInterval(nextSlideCountFn,3000);
		}
		autoTimerFn();
		
		//페이지버튼 이벤트 함수
		function pageBtnEventFn(){
			$('.pageBtn').removeClass('addPage');
			$('.pageBtn').eq(cnt).addClass('addPage');
			
		}

		//페이지버튼 클릭 이벤트
		$('.pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					if( cnt==0 && index==1 ){
						cnt=1;
						nextMainSlideFn();
					}
					else if( cnt==0 && index==2 ){
						cnt=2;
						prevMainSlideFn();
					}
					else if( cnt==1 && index==0 ){
						cnt=0;
						prevMainSlideFn();
					}
					else if( cnt==1 && index==2 ){
						cnt=2;
						nextMainSlideFn();
					}
					else if( cnt==2 && index==0 ){
						cnt=0;
						nextMainSlideFn();
					}
					else if( cnt==2 && index==1 ){
						cnt=1;
						prevMainSlideFn();
					}
					pauseFn();
				}
				
			});
		});
		
		//일시정지 함수
		function pauseFn(){
			clearInterval(setId2);
			clearInterval(setId);
			t=0;
			
			
			setId2 = setInterval(function(){
				t++;
				if( t>=7 ){
					t=0;
					nextSlideCountFn();
					autoTimerFn();
					clearInterval(setId2);
				}
			},1000);
		}
	
	
	
	    //아래 화살표 애니메이션 함수
		function arrowAniFn() {
			if( winW > 600 ){
				$('.arrowBtn-wrap').animate({bottom:5+'%'},700).animate({bottom:8+'%'},700,arrowAniFn);
			}
			else if( winW <= 600 ){
				$('.arrowBtn-wrap').animate({bottom:23+'%'},700).animate({bottom:26+'%'},700,arrowAniFn);
			}
			
		}
		arrowAniFn();
		
		
		//터치 이벤트
		$('.sec1-slide-container').swipe({
			swipeLeft:	function(){
				if( !$('.sec1-slide').is(':animated') ){
					pauseFn();
					nextSlideCountFn();
					if( cnt==0 ){
						$('html, body').stop().animate({ scrollTop: $('#section2').offset().top },600);
					}
					
				}
				
			},
			swipeRight:	function(){
				if( !$('.sec1-slide').is(':animated') ){
					pauseFn();
					prevSlideCountFn();
				}
				
			}
		});
	
})(jQuery, window, document);//section1.js