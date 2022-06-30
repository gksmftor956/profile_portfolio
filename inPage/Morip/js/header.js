(function($, window, document, undefined){
	
	var scr = t = app = winW = r = gnbH = 0;
		gnbH = $('.gnb').innerHeight();
		
		setTimeout(resizeFn,100);
		
		//반응형 BOM : 브라우저 오브 모델링
		$(window).resize(function(){	//크기 변화가 있을 때만 실행 
			
			resizeFn();
			
		});
		
			//반응형 함수
			function resizeFn(){
				gnbH = $('.gnb').innerHeight();	//gnb 박스 높이 자동인식
				winW = $(window).innerWidth();
				
				//반응형 창너비가 900초과 그리고 900이하
				if( winW > 900 ){
					//메인버튼 이벤트
					if( r==0 ){	//버블링 막는 알고리즘
						r=1;
						$('.sub').stop().slideUp(0);
						$('.mainBtn').on({	//off('mouseenter')
							mouseenter:	function(){
								$('.sub').stop().slideUp(300);
								$(this).next().stop().slideDown(300);
							}
						});
						
						//GNB 마우스 떠나면
						$('.gnb').on({	//off('mouseleave')
							mouseleave:	function(){
								$('.sub').stop().slideUp(300);
							}
						});
					}	
				}
				else{
					if( r==1 ){
						r=0;
						$('.sub').stop().slideDown(0);
						// $('.sub').css({display:'block'});
						$('.mainBtn').off('mouseenter');
						$('.gnb').off('mouseleave');
					}
				}			
			}

		
	
	//헤더 영역에 마우스 오버시 배경 부드럽게 변경
	$('#header').on({
		mouseenter:	function(){
			$('#header').addClass('addFixed');
		},
		click:	function(){
			$('#header').addClass('addFixed');
		},
		mouseleave:	function(){
			if( scr==0 && app==0 ){	//스크롤을 안된 경우 그리고 GNB가 안보인 경우
				$('#header').removeClass('addFixed');
				$('.gnb').hide();	//app==0 이어도 올라가는 순간 보일 수 있기때문
			}
		}
	});
	
	//앱바 버튼 이벤트
	$('.appBarBtn').on({
		click:	function(){
			$(this).toggleClass('addAppbar');
			if( app==0 ){
				app=1;
				$('.gnb').stop().show().animate({ top:-2 },300);
			}
			else{
				app=0;
				$('.gnb').stop().animate({ top:-gnbH },300,	function(){
					$('.gnb').hide();
				});
			}
		}
	});
	
	//스크롤 이벤트
	$(window).scroll(function(){
		if( $(window).scrollTop() >= 10 ){
			scr=1;
			$('#header').addClass('addFixed');
			if( t==0 ){
				t=1;
				$('html, body').stop().animate({ scrollTop:$('#moripCollection').offset().top-65 },800);
			}
		}
		else{
			scr=0;
			t=0;
			if( app==0 ){
				$('#header').removeClass('addFixed');
			}
			
		}
	});
	
	
	
	
})(jQuery, window, document);
//header.js