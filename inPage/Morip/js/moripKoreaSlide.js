(function($, window, document, undefined){
	
	//1. 변수설정
	var s3Cnt = 0;
	var s3z = s3Cnt==0?2:s3Cnt-1; //그냥 '2;' 도 가능. : 기본이 next 이기때문.
	var s3winW = 1360;	//기준값
	var s3conH = s3winW*0.411764706;	//비율
	var pagW = $('.pageImageBtn-wrap').innerWidth();
	var pagH = pagW*0.421875;
	
		$('.pageImageBtn-wrap').css({ height:pagW*0.421875 });
		$('#moripKorea .content').css({ height:s3conH });
	

	//2. 반응형 함수와 계산식
	function s3ResizeFn(){
		if( $(window).innerWidth() <= 1360 ){
			s3winW = $(window).innerWidth();	//기준값 이하이면 창너비
		}
		else{
			s3winW = 1360;	//기준값
		}
		
		s3conH = s3winW*0.411764706;	//비율
		$('#moripKorea .content').css({ height:s3conH });

		pagW = $('.pageImageBtn-wrap').innerWidth();
		pagH = pagW*0.421875;
		$('.pageImageBtn-wrap').css({ height:pagH });
	}
	
	//3. 로드시 실행 함수
	setTimeout(s3ResizeFn,100);
	
	//4. window객체 resize 리사이즈
	$(window).resize(function(){
		s3ResizeFn();
	});
	
	

	
	//1-1.메인 다음 슬라이드 함수
	function nextS3SlideFn(){
		$('.s3Slide').css({zIndex:1}).stop().animate({opacity:0},0);
		$('.s3Slide').eq(s3Cnt==0?2:s3Cnt-1).css({zIndex:2}).stop().animate({opacity:1},0);
		$('.s3Slide').eq(s3Cnt).css({zIndex:3}).stop().animate({opacity:1},700);
		imagePageBtnEventFn();
	}
	
	//1-2.메인 이전 슬라이드 함수
	function prevS3SlideFn(){
		$('.s3Slide').css({zIndex:1}).stop().animate({opacity:0},0);
		$('.s3Slide').eq(s3Cnt==2?0:s3Cnt+1).css({zIndex:2}).stop().animate({opacity:1},0);
		$('.s3Slide').eq(s3Cnt).css({zIndex:3}).stop().animate({opacity:1},700);
		imagePageBtnEventFn();
	}
	
	
	//2-1.다음 카운트 함수
	function nextS3CountFn(){
		s3Cnt++;
		if( s3Cnt>2 ){
			s3Cnt=0;
		}
		nextS3SlideFn();
	}
	//2-2.이전 카운트 함수
	function prevS3CountFn(){
		s3Cnt--;
		if( s3Cnt<0 ){
			s3Cnt=2;
		}
		prevS3SlideFn();
	}
	
	
	//3-1.다음 슬라이드 버튼 클릭 이벤트
	$('.arrRBtn').on({
		click:	function(){
			if( !$('.s3Slide').is(':animated') ){
				nextS3CountFn();
			}
		}
	});
	//3-2.이전 슬라이드 버튼 클릭 이벤트
	$('.arrLBtn').on({
		click:	function(){
			if( !$('.s3Slide').is(':animated') ){
				prevS3CountFn();
			}
		}
	});
	
	
	//4-1.이미지 페이지버튼 이벤트 함수
	function imagePageBtnEventFn(){
		if( s3Cnt==0 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide1.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
		}
		else if( s3Cnt==1 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});			
		}
		else if( s3Cnt==2 ){
			$('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
			$('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide1.jpg)'});				
		}
	}
	//4-2.이미지 페이지버튼 클릭 이벤트
	$('.pageImageBtn').each(function(index){
		$(this).on({
			click:	function(){
				
				if( s3Cnt==0 && index==0 ){
					s3Cnt=1;
					nextS3SlideFn();
				}
				else if( s3Cnt==0 && index==1 ){
					s3Cnt=2;
					prevS3SlideFn();
				}
				else if( s3Cnt==1 && index==0 ){
					s3Cnt=0;
					prevS3SlideFn();
				}
				else if( s3Cnt==1 && index==1 ){
					s3Cnt=2;
					nextS3SlideFn();
				}
				else if( s3Cnt==2 && index==0 ){
					s3Cnt=0;
					nextS3SlideFn();
				}
				else if( s3Cnt==2 && index==1 ){
					s3Cnt=1;
					prevS3SlideFn();
				}
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
})(jQuery, window, document);
//moripKoreaSlide.js