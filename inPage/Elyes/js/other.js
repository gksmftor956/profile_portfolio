(function($, window, document, undefined){
	
	//섹션2 모달창 이벤트
	$('.sec2-cap').each(function(index){
		$(this).on({
			click:	function(){
				if( index==0 ){
					$('.modal-wrap').css({ display:'block' });
					$('.modal-content').css({ display:'none' });
					$('.modal-content').eq(index).css({ display:'block' });
				}
				else if( index==1 ){
					$('.modal-wrap').css({ display:'block' });
					$('.modal-content').css({ display:'none' });
					$('.modal-content').eq(index).css({ display:'block' });
				}
				else if( index==2 ){
					$('.modal-wrap').css({ display:'block' });
					$('.modal-content').css({ display:'none' });
					$('.modal-content').eq(index).css({ display:'block' });					
				}
				else if( index==3 ){
					$('.modal-wrap').css({ display:'block' });
					$('.modal-content').css({ display:'none' });
					$('.modal-content').eq(index).css({ display:'block' });							
				}
				else if( index==4 ){
					$('.modal-wrap').css({ display:'block' });
					$('.modal-content').css({ display:'none' });
					$('.modal-content').eq(index).css({ display:'block' });							
				}
			}
		});	
	});
	
	$('.closeBtn').on({
		click:	function(){
			$('.modal-wrap').css({ display:'none' });
		}
	});	
	
	
	
	
	//고탑 클릭이벤트
	$('.goTopBtn').on({
		click:	function(event){
			event.preventDefault();
			$('html, body').stop().animate({ scrollTop:0 },1000);
		}
	});
	
	//고탑메뉴 스크롤탑값이 50이상일때 나타나고 그 외에는 사라진다.
	$(window).scroll(function(){
		if( $(this).scrollTop() >= 50 ){
			$('.goTop-wrap').css({ display:'block' });
		}
		else{
			$('.goTop-wrap').css({ display:'none' });
		}
	});
	
})(jQuery, window, document);
//other.js