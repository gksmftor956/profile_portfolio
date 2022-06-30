(function($, window, document, undefined){
	var winWS4 = $(window).innerWidth();
	var pBtnR = winWS4*0.237390962;
	var s4Cnt = 0;
	var conSlideH = $('.content-slide').innerHeight();
	var s4TxtCount = s4TxtCount2 = 0;
	var sT = 0;
	var s4SetId = s4SetId2 = s4T = s4Idtxt = 0;
	var arr = [7332,4511,22555,13535];	

	
		$(window).scroll(function(){
			if( $(this).scrollTop() >= $('#section3').offset().top && $(this).scrollTop() < $('#section5').offset().top ){
				if( sT==0 ){
					sT=1;
					countAutoPlayFn();
				}
			}
			else{
				sT=0;
				s4TxtCount=0;
				s4TxtCount2=0;
				clearInterval(s4Idtxt);
			}
		});
	
		function countAutoPlayFn(){

			s4Idtxt = setInterval(s4countFn,50);			
		}
		
		
		
		//count 함수
		function s4countFn(){
			
			s4TxtCount+=151;
			s4TxtCount2+=511;
			if( s4TxtCount <=7332 ){
				$('.txtNum').eq(0).text( s4TxtCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			else{
				$('.txtNum').eq(0).text( arr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			if( s4TxtCount <=4511 ){
				$('.txtNum').eq(1).text( s4TxtCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			else{
				$('.txtNum').eq(1).text( arr[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			if( s4TxtCount2 <=22555 ){
				$('.txtNum').eq(2).text( s4TxtCount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			else{
				$('.txtNum').eq(2).text( arr[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			if( s4TxtCount2 <=13535 ){
				$('.txtNum').eq(3).text( s4TxtCount2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			else{
				$('.txtNum').eq(3).text( arr[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
			}
			
		}
	
	
		$('#section4').css({width:winWS4});
		$('.sec4-container').css({width:winWS4});
		if( winWS4 < 1200 ){
			if( winWS4 > 830 ){
				$('.sec4-pageBtn-wrap').css({ right:pBtnR });
			}
			
		}
		

		
		function s4ResizeFn(){
			winWS4 = $(window).innerWidth();
			pBtnR = winWS4*0.237390962;
			$('#section4').css({width:winWS4});
			$('.sec4-container').css({width:winWS4});
			if( winWS4 < 1200 ){
				if( winWS4 > 830 ){
					$('.sec4-pageBtn-wrap').css({ right:pBtnR });
				}
				
			}

		}
		
		s4ResizeFn();
		setTimeout(s4ResizeFn,100);
		
		$(window).resize(function(){
			s4ResizeFn();
			setTimeout(s4ResizeFn,100);			
		});
		
		
		
		
		//공지사항 메인함수
		function s4NoticeSlideFn(){
			$('.content-wrap').stop().animate({ top:-conSlideH*s4Cnt },600, function(){
				if( s4Cnt>3 ){ s4Cnt=0; }
				if( s4Cnt<0 ){ s4Cnt=3; }
				$('.content-wrap').stop().animate({ top:-conSlideH*s4Cnt },0);
			});
			s4Cnt>3?z=0:z=s4Cnt;
			s4PageBtnEventFn();
		}
		
		//다음 카운트 함수
		function nextNoticeCountFn(){
			s4Cnt++;
			s4NoticeSlideFn();
		}
		//이전 카운트 함수
		function prevNoticeCountFn(){
			s4Cnt--;
			s4NoticeSlideFn();
		}
		
		//자동 타이머
		function s4AutoTimerFn(){
			s4SetId = setInterval(nextNoticeCountFn,4000);
			
		}
		s4AutoTimerFn();
	
		//페이지 버튼 이벤트 함수
		function s4PageBtnEventFn(){
			$('.sec4PageBtn').removeClass('addPageS4');
			$('.sec4PageBtn').eq(z).addClass('addPageS4');			
		}
		
		//페이지버튼 클릭 이벤트
		$('.sec4PageBtn').each(function(index){
			$(this).on({
				click:	function(){
					s4Cnt=index;
					s4NoticeSlideFn();
					s4PauseFn();
				}
			});
		});
		
		//일시정지 함수
		function s4PauseFn(){
			clearInterval(s4SetId2);
			clearInterval(s4SetId);
			s4T=0;
			
			
			s4SetId2 = setInterval(function(){
				s4T++;
				if( s4T>=7 ){
					s4T=0;
					nextNoticeCountFn();
					s4AutoTimerFn();
					clearInterval(s4SetId2);
				}
			},1000);
		}
	
})(jQuery, window, document);//section4.js