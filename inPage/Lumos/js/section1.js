(function($, window, document, undefined){
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var footerH = $('#footer').innerHeight();

	

		if( winH > 600 ){
			
			$('.mainSlide-wrap').css({ height:winH });
			$('#section2').css({ height:winH });
			$('#section3').css({ height:winH });
			$('#section4').css({ height:winH });
			$('#section5').css({ height:winH-footerH });
		}


		if( winH <= 600 || winW <= 1024 ){
			$('html').css({ overflowY:'scroll' });
		}

		

		function resizeFn(){
			winW = $(window).innerWidth();
			winH = $(window).innerHeight();
			footerH = $('#footer').innerHeight();

			if( winH > 600 ){
				
				$('.mainSlide-wrap').css({ height:winH });
				$('#section2').css({ height:winH });
				$('#section3').css({ height:winH });
				$('#section4').css({ height:winH });
				$('#section5').css({ height:winH-footerH });				
			}
			else if( winH <= 600 ){
				$('html').css({ overflowY:'scroll' });
			}		
			
			
			if( winW < 1024 || winH < 600 ){
				return false;
			}
			else{
				$(window).scroll(function(){
					if( $(this).scrollTop() == 0 ){
            
						$('.mainContent0').stop().show().animate({ marginTop:50 },0).animate({ marginTop:0 },500,   function(){
							$('.mainContent1').stop().show().animate({ marginTop:-50 },0).animate({ marginTop:0 },500,    function(){
								$('.mainContent2').stop().show().animate({ marginTop:50 },0).animate({ marginTop:0 },500,    function(){
									$('.mainContent3').stop().show().animate({ marginTop:-50 },0).animate({ marginTop:0 },500);
								});
							});
						});
					}
					else{
						$('.mainContent').css({ display:'none' });
					}
				});
			}
		}
		setTimeout(resizeFn,100);

		$(window).resize(function(){
			clearTimeout(setId);
			setId = setTimeout(resizeFn,100);
		});
    
    var cnt = 0;
    var setId = 0;
    var setId2 = 0;
    var t = 0;

    //섹션1 페이드인아웃 슬라이드
	//다음 슬라이드 메인 함수
	function nextMainSlideFn(){
		$('.mainSlide').css({zIndex:1}).stop().animate({opacity:0},0);
		$('.mainSlide').eq(cnt==0?3:cnt-1).css({zIndex:2}).stop().animate({opacity:1},0);
		$('.mainSlide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},700);
		pageBtnEventFn();
		
		
	}
	//이전 슬라이드 메인 함수
	function prevMainSlideFn(){
		$('.mainSlide').css({zIndex:1}).stop().animate({opacity:0},0);
		$('.mainSlide').eq(cnt==3?0:cnt+1).css({zIndex:2}).stop().animate({opacity:1},0);
		$('.mainSlide').eq(cnt).css({zIndex:3}).stop().animate({opacity:1},700);
		pageBtnEventFn();
		
	}
	
	//다음 슬라이드 카운트 함수
	function nextSlideCountFn(){
		cnt++;
		if( cnt>3 ){
			cnt=0;
		}
		nextMainSlideFn();
	}
	//이전 슬라이드 카운트 함수
	function prevSlideCountFn(){
		cnt--;
		if( cnt<0 ){
			cnt=3;
		}
		prevMainSlideFn();
	}

	//페이지버튼 이벤트 함수
	function pageBtnEventFn(){
		$('.sectionBtn').removeClass('addSecBtn');
		$('.sectionBtn').eq(cnt).addClass('addSecBtn');
		
	}
	
	//자동 타이머 함수
	function autoTimerFn(){
		setId = setInterval(nextSlideCountFn,4000);
	}
    autoTimerFn();
    
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
	//터치 이벤트
	$('.mainSlide-container').swipe({
		swipeLeft:	function(){
			if( !$('.mainSlide').is(':animated') ){
				pauseFn();
				nextSlideCountFn();
/* 				if( cnt==0 ){
					$('html, body').stop().animate({ scrollTop: $('#section2').offset().top },600);
				} */
			}
		},
		swipeRight:	function(){
			if( !$('.mainSlide').is(':animated') ){
				pauseFn();
				prevSlideCountFn();
			}
		}
	});    

    //섹션1 페이지버튼 클릭 이벤트 : 해당 섹션으로 이동
    $('.sectionBtn').each(function(index){
        $(this).on({
            click:  function(){
                if(index==0){
                    $('html, body').animate({ scrollTop:$('#section2').offset().top },1000);
                }
                else if(index==1){
                    $('html, body').animate({ scrollTop:$('#section3').offset().top },1000);
                }
                else if(index==2){
                    $('html, body').animate({ scrollTop:$('#section4').offset().top },1000);
                }
                else if(index==3){
                    $('html, body').animate({ scrollTop:$('#section5').offset().top },1000);
                }
                
            }
        });
    });



    
    $(window).ready(function(){
        $('.mainContent').stop().hide();
        $('.mainContent0').stop().show().animate({ marginTop:50 },0).animate({ marginTop:0 },500,   function(){
            $('.mainContent1').stop().show().animate({ marginTop:-50 },0).animate({ marginTop:0 },500,    function(){
                $('.mainContent2').stop().show().animate({ marginTop:50 },0).animate({ marginTop:0 },500,    function(){
                    $('.mainContent3').stop().show().animate({ marginTop:-50 },0).animate({ marginTop:0 },500);
                });
            });
        });
    });
    


})(jQuery, window, document);//section1.js