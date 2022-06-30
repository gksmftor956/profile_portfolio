(function($, window, document, undefined){
	//1. 반응형 스크립트 변수 설정 및 초기값 : 슬라이드의 너비를 자동계산을 컨테이너 박스 너비(기준값:1570px) 나누기 3으로 = 슬라이드1개의 너비
	var imgW = $('.s4Slide-content .image').innerWidth();
	var winW = $(window).innerWidth();	//창 너비
	var s4ConW = $('#TravelLounge .container').innerWidth();	//컨테이너 박스의 너비
	var col = 3;				//슬라이드 개수(칸수)
	var s4SlideW = s4ConW/col;	//슬라이드 너비
	var s4Cnt = z = setId4 = setId5 = s4T = 0;
		$('.s4Slide').css({ width:s4SlideW });
		$('.s4Slide-wrap').css({ width:(s4SlideW*12), marginLeft:-(s4SlideW*3) });	
		$('.s4Slide-content .image').css({ height:imgW });

		
	//2. 반응형 함수
		function s4ResizeFn(){
			imgW = $('.s4Slide-content .image').innerWidth();
			winW = $(window).innerWidth();
			s4ConW = $('#TravelLounge .container').innerWidth();
			
			if( winW > 1024 ){
				col = 3;
			}
			else if( winW > 600 ){	//600 ~ 1024
				col = 2;
			}
			else{
				col = 1;
			}
			s4SlideW = s4ConW/col;
			$('.s4Slide').css({ width:s4SlideW });
			$('.s4Slide-wrap').css({ width:(s4SlideW*12), marginLeft:-(s4SlideW*3) });
			$('.s4Slide-content .image').css({ height:imgW });
			
			//메인 슬라이드 함수 호출 반응형 적용
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
			
		}
		s4ResizeFn();
		setIdTs = setTimeout(s4ResizeFn,100);
		
		//3. 반응형 구현 이벤트
		$(window).resize(function(){
			s4ResizeFn();
			setIdTs = setTimeout(s4ResizeFn,100);
		});
		
		
		
		
		//테두리 애니메이션
		//마우스 오버시 애니메이션
		//마우스 아웃시 사라짐
		$('.slideBtn').on({
			mouseenter:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%' },300);
				$(this).prev().find('i').eq(1).animate({ height:100+'%' },300);
				$(this).prev().find('i').eq(2).animate({ width: 100+'%' },300);
				$(this).prev().find('i').eq(3).animate({ height:100+'%' },300);
				// $(this).prev().find('i').eq(0).animate({width:100+'%'},500);
			},
			mouseleave:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0+'%' },0);
				$(this).prev().find('i').eq(1).animate({ height:0+'%' },0);
				$(this).prev().find('i').eq(2).animate({ width: 0+'%' },0);
				$(this).prev().find('i').eq(3).animate({ height:0+'%' },0);				
			},
			focusin:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 100+'%' },300);
				$(this).prev().find('i').eq(1).animate({ height:100+'%' },300);
				$(this).prev().find('i').eq(2).animate({ width: 100+'%' },300);
				$(this).prev().find('i').eq(3).animate({ height:100+'%' },300);
			},
			focusout:	function(){
				$(this).prev().find('i').eq(0).animate({ width: 0+'%' },0);
				$(this).prev().find('i').eq(1).animate({ height:0+'%' },0);
				$(this).prev().find('i').eq(2).animate({ width: 0+'%' },0);
				$(this).prev().find('i').eq(3).animate({ height:0+'%' },0);				
			}
		});
	
	
	
		//섹션4의 메인 슬라이드 함수
		function s4MainSlideFn(){
			$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },500,function(){
				if( s4Cnt>5 ){s4Cnt=0;}
				if( s4Cnt<0 ){s4Cnt=5;}
				$('.s4Slide-wrap').stop().animate({ left:-(s4SlideW*s4Cnt) },0);
			});
			pageEventFn();
		}
		
		//다음 카운트 함수
		function nextCountFn(){
			s4Cnt++;
			if( s4Cnt>5 ){
				s4Cnt=0;
			}
			s4MainSlideFn();
		}
	
		//이전 카운트 함수
		function prevCountFn(){
			s4Cnt--;
			if( s4Cnt<0 ){
				s4Cnt=5;
			}
			s4MainSlideFn();
		}
	
		//다음,이전 슬라이드 터치이벤트
		$('.s4Slide-container').swipe({
			swipeLeft:	function(){
				if( !$('.s4Slide-wrap').is(':animated') ){
					pauseFn();
					nextCountFn();
				}
			},
			swipeRight:	function(){
				if( !$('.s4Slide-wrap').is(':animated') ){
					pauseFn();
					prevCountFn();
				}
			}
		});
		
		//페이지이벤트 함수
		function pageEventFn(){
			// if( z>5 ){z=0;}
			s4Cnt<0?z=5:z=s4Cnt;
			$('.pageBtn').removeClass('addPageBtnS4');
			$('.pageBtn').eq(z).addClass('addPageBtnS4');
		}
		
		//페이지 버튼 클릭 이벤트
		$('.pageBtn').each(function(index){
			$(this).on({
				click:	function(){
					s4Cnt=index;
					s4MainSlideFn();
					pauseFn();
				}
			});
		});
	
	
		//오토 타이머 함수
		function autoTimerS4Fn(){
			setId4 = setInterval(nextCountFn,3000);
		}
		autoTimerS4Fn();
	
	
		//일시정지 함수
		function pauseFn(){
			clearInterval(setId5);
			clearInterval(setId4);
			s4T=0;
			
			setId5=setInterval(function(){
				s4T++;
				if( s4T>=5 ){
					s4T=0;
					autoTimerS4Fn();
					nextCountFn();
					clearInterval(setId5);
				}
			},1000);
			
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery, window, document);
//TravelLoungeSlide.js